import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  // This is valid Vite config – history fallback is automatic in Vite dev server
  server: {
    port: 5173,
  }
})