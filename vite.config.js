import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const deezerProxy = {
  '/api/deezer': {
    target: 'https://api.deezer.com',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api\/deezer/, ''),
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: deezerProxy,
  },
  preview: {
    proxy: deezerProxy,
  },
})
