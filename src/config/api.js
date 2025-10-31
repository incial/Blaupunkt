// API Configuration
// In production, API is served from same domain (PHP backend on Hostinger)
// In development, you can set VITE_API_URL to point to local server if needed
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const apiConfig = {
  baseUrl: API_BASE_URL,
  endpoints: {
    contact: `${API_BASE_URL}/api/contact.php`  // Updated to use PHP endpoint
  }
};

// Helper function to make API calls
export const apiCall = async (endpoint, options = {}) => {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  });

  return response;
};
