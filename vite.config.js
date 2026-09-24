import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative assets make the build work on both username.github.io
  // and project pages such as username.github.io/repository-name/.
  base: './',
})
