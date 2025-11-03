import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // 👈 મહત્વપૂર્ણ સુધારો
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
