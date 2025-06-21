import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import process from 'process'
import dataManagerRoutes from './routes/dataManager.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:4173'],
  credentials: true
}))
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))

// Add CORS headers for static assets
app.use((req, res, next) => {
  res.header('Cross-Origin-Resource-Policy', 'cross-origin')
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

// Serve static files from assets directory
app.use('/assets', express.static(path.join(__dirname, '../src/assets')))

// API routes
app.use('/api', dataManagerRoutes)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Data Manager API is running' })
})

// Error handling middleware
app.use((error, req, res) => {
  console.error('Server error:', error)
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  })
})

app.listen(PORT, () => {
  console.log(`Data Manager server is running on port ${PORT}`)
  console.log(`Health check: http://localhost:${PORT}/health`)
  console.log(`API base URL: http://localhost:${PORT}/api`)
})

export default app
