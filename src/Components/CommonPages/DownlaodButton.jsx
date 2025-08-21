import React from 'react'
import { FiDownload } from 'react-icons/fi'
import { PDFDocument } from 'pdf-lib'
import { createLogger } from '../../utils/logger'

const logger = createLogger('DownloadButton')

// Map all PDF assets under src so Vite bundles them and exposes their URLs in production
// Keys will be absolute like '/src/assets/pdf/...'
// Values will be the resolved URLs in the built app (e.g., '/assets/xyz.hash.pdf')
// Note: as: 'url' ensures we get the public URL string
const pdfUrlMap = import.meta.glob('/src/assets/pdf/**/*', { eager: true, as: 'url' })

/**
 * DownloadButton component for displaying downloadable resources
 *
 * @param {Object} props - Component props
 * @param {string} props.productCategory - Optional category to filter appropriate downloads for specific product
 * @param {string} props.className - Optional additional CSS classes
 * @param {Object} props.downloadData - Download data specific to the product category (optional)
 */
const DownloadButton = ({ productCategory, className = '', downloadData }) => {
  // Normalize file URLs so they work in production builds
  // Many data entries reference '/src/assets/pdf/...', which does not exist after Vite build.
  // Files under /public/pdf are served at '/pdf/...'.
  const resolveFileUrl = (url) => {
    if (!url || typeof url !== 'string') return url
    // Replace common dev paths with production-served public paths
    let resolved = url
    // First try to resolve via pre-bundled URL map from Vite
    if (pdfUrlMap && pdfUrlMap[resolved]) {
      return pdfUrlMap[resolved]
    }
    if (resolved.startsWith('/src/assets/pdf')) {
      resolved = resolved.replace('/src/assets/pdf', '/pdf')
    } else if (resolved.includes('/src/assets/pdf/')) {
      resolved = resolved.replace('/src/assets/pdf/', '/pdf/')
    } else if (resolved.startsWith('/assets/pdf')) {
      // In case some entries omit the leading 'src'
      resolved = resolved.replace('/assets/pdf', '/pdf')
    } else if (resolved.startsWith('/public/')) {
      // Public files are served from root
      resolved = resolved.replace('/public', '')
    }
    // If still not resolved via map and still pointing to src, attempt a secondary lookup after normalization
    if (pdfUrlMap && pdfUrlMap[resolved]) {
      return pdfUrlMap[resolved]
    }
    return resolved
  }
  // Check if downloadData is provided
  if (!downloadData) {
    logger.warn(
      `DownloadButton: No download data available for ${productCategory}`
    )
    return null
  } // Get the appropriate download files based on product category
  const getDownloadFiles = () => {
    // Default files
    let dataSheetFiles = []
    let conformityFiles = []

    if (downloadData?.categories) {
      // Find technical specifications category
      const techSpecsCategory = downloadData.categories.find(
        cat =>
          cat.name.toLowerCase().includes('technical') ||
          cat.name.toLowerCase().includes('specifications')
      )

      // Find installation guides category
      const installationCategory = downloadData.categories.find(cat =>
        cat.name.toLowerCase().includes('installation')
      )

      // Find certification category
      const certificationCategory = downloadData.categories.find(
        cat =>
          cat.name.toLowerCase().includes('certification') ||
          cat.name.toLowerCase().includes('conformity')
      )

      // Get files based on product category
      switch (productCategory) {
        case 'chargingCables': {
          // For cables, include all technical specification files
          dataSheetFiles = techSpecsCategory?.files || []
          conformityFiles = certificationCategory?.files || []
          break
        }
        case 'chargingStations': {
          // For stations, use technical specs only (installation guides removed)
          dataSheetFiles = techSpecsCategory?.files || []
          conformityFiles = certificationCategory?.files || []
          break
        }
        case 'dcChargingStation':
        case 'dcSuperFastChargingStation': {
          // For DC stations, use technical specs and any available installation guides
          dataSheetFiles = [
            ...(techSpecsCategory?.files || []),
            ...(installationCategory?.files || [])
          ]
          conformityFiles = certificationCategory?.files || []
          break
        }
        case 'portableEVCharging': {
          dataSheetFiles = techSpecsCategory?.files || []
          conformityFiles = certificationCategory?.files || []
          break
        }
        default: {
          // Use all available technical files
          dataSheetFiles = techSpecsCategory?.files || []
          conformityFiles = certificationCategory?.files || []
        }
      }
    }

    return { dataSheetFiles, conformityFiles }
  } // Function to create and download combined PDF file
  const createCombinedPDF = async (files, fileName) => {
    if (files.length === 0) {
      logger.warn('No files available for download')
      return
    }

    if (files.length === 1) {
      // Single file - direct download
      logger.info('Downloading single file:', files[0].name)
      const link = document.createElement('a')
  link.href = resolveFileUrl(files[0].url)
      link.download = files[0].name || 'download.pdf'
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      return
    }

    // Multiple files - combine into single PDF
    logger.info(
      `Combining ${files.length} PDF files:`,
      files.map(f => f.name)
    )
    try {
      const mergedPdf = await PDFDocument.create()
      let pagesAdded = 0

      // Fetch and merge each PDF file
      for (const file of files) {
        try {
          logger.debug(`Fetching file: ${file.name}`)
          const response = await fetch(resolveFileUrl(file.url))
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`)
          }
          const pdfBytes = await response.arrayBuffer()
          const pdf = await PDFDocument.load(pdfBytes)
          const copiedPages = await mergedPdf.copyPages(
            pdf,
            pdf.getPageIndices()
          )
          copiedPages.forEach(page => mergedPdf.addPage(page))
          pagesAdded += copiedPages.length
          logger.debug(`Added ${copiedPages.length} pages from: ${file.name}`)
        } catch (error) {
          logger.warn(`Failed to merge file: ${file.name}`, error)
          // Continue with other files instead of failing completely
        }
      }

      // If no pages were merged, fall back to opening the first file instead of downloading a blank PDF
      if (pagesAdded === 0) {
        logger.error('No pages merged. Falling back to opening the first file in a new tab.')
        if (files.length > 0) {
          window.open(resolveFileUrl(files[0].url), '_blank')
        }
        return
      }

      // Generate and download the combined PDF
      logger.info('Generating combined PDF...')
      const pdfBytes = await mergedPdf.save()
      const blob = new Blob([pdfBytes], { type: 'application/pdf' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = `${fileName}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(link.href)
      logger.info('Combined PDF download completed:', `${fileName}.pdf`)
    } catch (error) {
      logger.error('Error creating combined PDF:', error)
      // Fallback: open first file in new tab
      if (files.length > 0) {
        logger.info('Fallback: opening first file in new tab')
        window.open(resolveFileUrl(files[0].url), '_blank')
      }
    }
  }

  const { dataSheetFiles, conformityFiles } = getDownloadFiles()

  // Don't render the component if no files are available
  if (dataSheetFiles.length === 0 && conformityFiles.length === 0) {
    return null
  }
  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 ${className}`}
    >
      <h2 className='text-3xl sm:text-3xl lg:text-4xl font-semibold mb-8'>
        Downloads
      </h2>{' '}
      <div className='flex flex-col sm:flex-row gap-4'>
        {' '}
        {/* Data Sheet Button */}
        <button
          onClick={() =>
            createCombinedPDF(
              dataSheetFiles,
              `${productCategory || 'Product'}_Data_Sheets`
            )
          }
          disabled={dataSheetFiles.length === 0}
          className='flex items-center justify-between border-2 rounded-lg px-6 py-3 hover:bg-gray-50 transition-colors duration-300 group border-blaupunkt-secondary text-blaupunkt-secondary bg-transparent disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
        >
          <span className='mr-4 text-blaupunkt-secondary group-hover:text-blaupunkt-primary-dark transition-colors font-medium'>
            Data Sheet
          </span>

          <FiDownload className='h-4 w-4 text-blaupunkt-primary' />
        </button>
        {/* Declaration of Conformity Button */}
        <button
          onClick={() =>
            createCombinedPDF(
              conformityFiles,
              `${productCategory || 'Product'}_Conformity_Documents`
            )
          }
          disabled={conformityFiles.length === 0}
          className='flex items-center justify-between border-2 rounded-lg px-6 py-3 hover:bg-gray-50 transition-colors duration-300 group border-blaupunkt-secondary text-blaupunkt-secondary bg-transparent disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
        >
          <span className='mr-4 text-blaupunkt-secondary group-hover:text-blaupunkt-primary-dark transition-colors font-medium'>
            Declaration of Conformity
          </span>

          <FiDownload className='h-4 w-4 text-blaupunkt-primary' />
        </button>
      </div>
    </div>
  )
}

export default DownloadButton
