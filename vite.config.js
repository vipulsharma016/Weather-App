import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Add this line! This tells Vite the base public path for the deployment.
  build: {
    outDir: 'dist', // This is Vite's default, good to explicitly state it if you ever change it
  },
})
