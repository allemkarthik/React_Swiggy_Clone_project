import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base:"/React_Swiggy_Clone_project/",
  plugins: [
    
    react(),
    tailwindcss(),
    
  ],
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    globals: true,
  },
  esbuild: {
    loader: 'jsx', // Treat all .js as JSX
  }

})
