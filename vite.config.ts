/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import sass from 'sass'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@design': path.resolve(__dirname, './src/App/design'),
      '@assets': path.resolve(__dirname, './src/App/assets'),
      '@project': path.resolve(__dirname, './src/Project'),
      '@components': path.resolve(__dirname, './src/shared/components'),
      '@hooks': path.resolve(__dirname, './src/shared/hooks'),
      '@stores': path.resolve(__dirname, './src/shared/stores'),
      '@utils': path.resolve(__dirname, './src/shared/utils'),
    },
  },
})
