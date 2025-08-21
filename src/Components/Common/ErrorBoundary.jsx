import React from 'react'
import { createLogger } from '../../utils/logger'

const logger = createLogger('ErrorBoundary')

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log the error
    logger.error('Error caught by boundary', {
      error: error.message,
      componentStack: errorInfo.componentStack,
      errorBoundary: this.props.fallbackComponent || 'Default'
    })

    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.state.errorInfo)
      }

      // Default fallback UI
      return (
        <div className="min-h-96 flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            <div className="mb-4">
              <svg 
                className="mx-auto h-16 w-16 text-red-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" 
                />
              </svg>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {this.props.title || 'Something went wrong'}
            </h2>
            
            <p className="text-gray-600 mb-6">
              {this.props.message || 'We apologize for the inconvenience. Please try refreshing the page.'}
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-blaupunkt-primary hover:bg-blaupunkt-primary-dark text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Refresh Page
              </button>
              
              {this.props.onRetry && (
                <button
                  onClick={() => {
                    this.setState({ hasError: false, error: null, errorInfo: null })
                    this.props.onRetry()
                  }}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Try Again
                </button>
              )}
            </div>
            
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Developer Info
                </summary>
                <div className="mt-2 p-3 bg-gray-50 rounded text-xs font-mono text-red-600 overflow-auto max-h-40">
                  <div className="font-bold mb-1">Error:</div>
                  <div className="mb-2">{this.state.error.message}</div>
                  {this.state.errorInfo && (
                    <>
                      <div className="font-bold mb-1">Component Stack:</div>
                      <div>{this.state.errorInfo.componentStack}</div>
                    </>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
