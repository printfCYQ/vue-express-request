import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { baseUrl } from './src/url'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/mock': {
        target: baseUrl,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mock/, '/mock')
      }
    }
  }
})
