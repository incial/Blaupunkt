// =============================================================================
// LOGGER UTILITY
// =============================================================================
// Professional logging system for development and production environments
// Provides controlled logging with levels and proper error handling
// =============================================================================

/**
 * Logger levels for different types of messages
 */
export const LOG_LEVELS = {
  ERROR: 'error',
  WARN: 'warn', 
  INFO: 'info',
  DEBUG: 'debug'
}

/**
 * Development environment flag
 */
const isDevelopment = import.meta.env.DEV

/**
 * Logger class for structured logging
 */
class Logger {
  constructor(context = 'App') {
    this.context = context
  }

  /**
   * Log error messages
   */
  error(message, data = null) {
    if (isDevelopment) {
      console.error(`[${this.context}] ERROR:`, message, data || '')
    }
    // In production, you might want to send to error tracking service
    // this.sendToErrorTracking('error', message, data)
  }

  /**
   * Log warning messages
   */
  warn(message, data = null) {
    if (isDevelopment) {
      console.warn(`[${this.context}] WARN:`, message, data || '')
    }
  }

  /**
   * Log info messages
   */
  info(message, data = null) {
    if (isDevelopment) {
      console.info(`[${this.context}] INFO:`, message, data || '')
    }
  }

  /**
   * Log debug messages (only in development)
   */
  debug(message, data = null) {
    if (isDevelopment) {
      console.log(`[${this.context}] DEBUG:`, message, data || '')
    }
  }

  /**
   * Create a new logger instance with specific context
   */
  createChildLogger(childContext) {
    return new Logger(`${this.context}:${childContext}`)
  }
}

/**
 * Default logger instance
 */
export const logger = new Logger('Blaupunkt')

/**
 * Create context-specific loggers
 */
export const createLogger = (context) => new Logger(context)

/**
 * Error boundary helper
 */
export const handleError = (error, context = 'Unknown', additionalData = null) => {
  const contextLogger = createLogger(context)
  contextLogger.error('Unhandled error occurred', {
    error: error.message,
    stack: error.stack,
    additionalData
  })
}

/**
 * Async operation wrapper with error handling
 */
export const withErrorHandling = async (operation, context = 'Operation') => {
  try {
    return await operation()
  } catch (error) {
    handleError(error, context)
    throw error // Re-throw for component-level handling
  }
}

export default logger
