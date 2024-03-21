import { defineConfig } from 'vite'
import {fileURLToPath, URL} from 'node:url'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:8080,
  },
  plugins: [react()],
  resolve: {
      alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
      }
  },
  css:{
    preprocessorOptions:{
      less:{
        additionalData:'@import "./src/assets/style/global.less";',
      }
    }
  }
})
