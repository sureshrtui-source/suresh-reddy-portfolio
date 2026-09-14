import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Using base './' ensures the app works correctly on GitHub Pages
// regardless of the repository name path.
export default defineConfig({
  plugins: [react()],
  base: './',
})
