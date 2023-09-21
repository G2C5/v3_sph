import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 关闭规范检测
  lintOnSave: false,
  server: {
    proxy: {
      '/api': {
        target: "http://gmall-h5-api.atguigu.cn",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/imgapi': {
        target: 'https://www.dmoe.cc',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/imgapi/, ''),
      }
    }
  }
})
