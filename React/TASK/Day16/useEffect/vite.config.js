import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { tailwindcss } from "@vite/tailwindcss";r

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
