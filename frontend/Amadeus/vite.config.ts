import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    proxy: {
      '/amadeus/': {
        target: 'http://localhost:9090/',
        changeOrigin: true
      }
    }
  },
  preview: {
    port: 8080
  },
  plugins: [react()],
})
