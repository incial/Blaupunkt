import React from 'react'
import { createLogger } from '../../utils/logger'

const logger = createLogger('ErrorBoundary')

/**
 * Higher-order component to wrap components with error boundary
 */
export const withErrorBoundary = (Component, errorBoundaryProps = {}) => {
  const WrappedComponent = (props) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  )
  
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`
  return WrappedComponent
}

/**
 * Hook for error handling in functional components
 */
export const useErrorHandler = () => {
  const handleError = React.useCallback((error, context = 'Component') => {
    logger.error('Error in component', { error: error.message, context })
    // Could trigger error boundary by throwing
    throw error
  }, [])

  return handleError
}
