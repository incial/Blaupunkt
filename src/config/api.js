// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const apiConfig = {
  baseUrl: API_BASE_URL,
  endpoints: {
    contact: `${API_BASE_URL}/api/contact`
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
