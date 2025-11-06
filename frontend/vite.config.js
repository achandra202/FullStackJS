import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy API requests to backend dev server.
    // Backend runs on PORT from backend (default 3000). Adjust target if your backend uses a different port or hostname.
    proxy: {
      // proxy all /api requests to the backend server
      '/api': 'http://localhost:3000',
    },
  },
})