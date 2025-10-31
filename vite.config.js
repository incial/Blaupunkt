import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // Important for Hostinger deployment
  publicDir: 'public', // Ensure public folder is copied to dist
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable sourcemaps for production
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'react-hot-toast', 'react-icons']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 3000,
    // No proxy needed - PHP backend is on same domain in production
    cors: true,
    headers: {
      'Cross-Origin-Resource-Policy': 'cross-origin'
    }
  },
  define: {
    global: 'globalThis',
  },
  // Ensure proper handling of environment variables
  envPrefix: 'VITE_'
})
