import express from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs/promises'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const router = express.Router()

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    // Determine destination based on file type
    let destPath
    if (file.mimetype.startsWith('image/')) {
      destPath = path.join(__dirname, '../../src/assets/Images')
    } else if (file.mimetype.startsWith('video/')) {
      destPath = path.join(__dirname, '../../src/assets/Videos')
    } else {
      destPath = path.join(__dirname, '../../src/assets')
    }

    // Ensure directory exists
    try {
      await fs.mkdir(destPath, { recursive: true })
    } catch (error) {
      console.error('Error creating directory:', error)
    }

    cb(null, destPath)
  },
  filename: (req, file, cb) => {
    // Keep original filename
    cb(null, file.originalname)
  }
})

const upload = multer({ 
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept images and videos
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/') || file.mimetype === 'image/svg+xml') {
      cb(null, true)
    } else {
      cb(new Error('Only image and video files are allowed'), false)
    }
  }
})

// Update data.js file
router.post('/update-data', async (req, res) => {
  try {
    const { content } = req.body
    const dataFilePath = path.join(__dirname, '../../src/Utils/data.js')
    
    // Backup original file
    const backupPath = path.join(__dirname, '../../src/Utils/data.backup.js')
    try {
      const originalContent = await fs.readFile(dataFilePath, 'utf8')
      await fs.writeFile(backupPath, originalContent)
    } catch (error) {
      console.warn('Could not create backup:', error.message)
    }

    // Write new content
    await fs.writeFile(dataFilePath, content, 'utf8')
    
    res.json({ 
      success: true, 
      message: 'Data file updated successfully',
      backupCreated: true 
    })
  } catch (error) {
    console.error('Error updating data file:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Error updating data file',
      error: error.message 
    })
  }
})

// Upload assets
router.post('/upload-assets', upload.array('assets'), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'No files uploaded' 
      })
    }

    // Update assets.js file with new assets
    await updateAssetsFile(req.files)

    res.json({ 
      success: true, 
      message: 'Assets uploaded successfully',
      uploadedCount: req.files.length,
      files: req.files.map(file => ({
        filename: file.filename,
        originalname: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
        path: file.path
      }))
    })
  } catch (error) {
    console.error('Error uploading assets:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Error uploading assets',
      error: error.message 
    })
  }
})

// Function to update assets.js file
async function updateAssetsFile(uploadedFiles) {
  const assetsFilePath = path.join(__dirname, '../../src/Utils/assets.js')
  
  try {
    // Read current assets file
    let content = await fs.readFile(assetsFilePath, 'utf8')
    
    // Process uploaded files and update content
    uploadedFiles.forEach(file => {
      const relativePath = path.relative(
        path.join(__dirname, '../../src/Utils'),
        file.path
      ).replace(/\\/g, '/')
      
      const filename = path.parse(file.filename).name
      const extension = path.parse(file.filename).ext.toLowerCase()
      
      // Add import statement if it's an image
      if (file.mimetype.startsWith('image/')) {
        const importName = `${filename}Url`
        const importStatement = `import ${importName} from '../${relativePath}'\n`        // Add import after existing imports
        const importRegex = /(import.*from.*['"][^'"]*['"])\n/g
        let lastImportIndex = 0
        const matches = [...content.matchAll(importRegex)]
        if (matches.length > 0) {
          lastImportIndex = matches[matches.length - 1].index + matches[matches.length - 1][0].length
        }
        
        if (lastImportIndex > 0) {
          content = content.slice(0, lastImportIndex) + importStatement + content.slice(lastImportIndex)
        }
        
        // Add to appropriate export object
        const exportName = getExportObjectName(filename, extension)
        if (exportName) {
          const exportRegex = new RegExp(`(export const ${exportName} = \\{[^}]*)(\\}[^}]*$)`, 's')
          const exportMatch = content.match(exportRegex)
          
          if (exportMatch) {
            const newEntry = `  ${filename}: ${importName},\n`
            content = content.replace(exportRegex, `$1${newEntry}$2`)
          }
        }
      }
    })
    
    // Write updated content
    await fs.writeFile(assetsFilePath, content, 'utf8')
    
  } catch (error) {
    console.error('Error updating assets file:', error)
    throw error
  }
}

// Helper function to determine which export object to add the asset to
function getExportObjectName(filename, extension) {
  const lowerFilename = filename.toLowerCase()
  
  if (lowerFilename.includes('logo')) return 'logos'
  if (lowerFilename.includes('hero')) return 'heroImgs'
  if (lowerFilename.includes('home')) return 'homeImgs'
  if (lowerFilename.includes('background') || lowerFilename.includes('bg')) return 'bgImgs'
  if (lowerFilename.includes('category')) return 'categoryImgs'
  if (lowerFilename.includes('product')) return 'productImgs'
  if (lowerFilename.includes('charger') || lowerFilename.includes('charging')) return 'productImgs'
  if (extension === '.svg') return 'logos'
  
  // Default to general images
  return 'homeImgs'
}

// Get current data structure
router.get('/data', async (req, res) => {
  try {
    const dataFilePath = path.join(__dirname, '../../src/Utils/data.js')
    const content = await fs.readFile(dataFilePath, 'utf8')
    
    res.json({ 
      success: true, 
      content 
    })
  } catch (error) {
    console.error('Error reading data file:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Error reading data file',
      error: error.message 
    })
  }
})

// Get list of assets
router.get('/assets', async (req, res) => {
  try {
    const assetsDir = path.join(__dirname, '../../src/assets')
    const assets = await getAssetsRecursively(assetsDir)
    
    res.json({ 
      success: true, 
      assets 
    })
  } catch (error) {
    console.error('Error reading assets:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Error reading assets',
      error: error.message 
    })
  }
})

// Helper function to get assets recursively
async function getAssetsRecursively(dir, baseDir = dir) {
  const assets = []
  
  try {
    const items = await fs.readdir(dir, { withFileTypes: true })
    
    for (const item of items) {
      const itemPath = path.join(dir, item.name)
      
      if (item.isDirectory()) {
        const subAssets = await getAssetsRecursively(itemPath, baseDir)
        assets.push(...subAssets)
      } else {
        const relativePath = path.relative(baseDir, itemPath)
        const stats = await fs.stat(itemPath)
        
        assets.push({
          name: item.name,
          path: relativePath,
          size: stats.size,
          modified: stats.mtime,
          type: path.extname(item.name).toLowerCase()
        })
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error)
  }
  
  return assets
}

export default router
