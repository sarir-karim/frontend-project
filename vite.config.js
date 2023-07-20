import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/frontend-project/",
  build: {
    chunkSizeWarningLimit: 100000000
},
  plugins: [react()],
})
