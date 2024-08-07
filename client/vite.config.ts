/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import pluginPurgeCss from '@mojojoejo/vite-plugin-purgecss';
import sass from 'sass';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['assets/*'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'UwuwuOS - A webos for creatives',
        short_name: 'UwuwuOS',
        description: 'A webOS with games, softwares and a touch of fun',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
    pluginPurgeCss({
      variables: true,
    }),
  ],
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
      '@design': path.resolve(__dirname, './src/app/design'),
      '@assets': path.resolve(__dirname, './src/app/assets'),
      '@project': path.resolve(__dirname, './src/project'),
      '@components': path.resolve(__dirname, './src/shared/components'),
      '@hooks': path.resolve(__dirname, './src/shared/hooks'),
      '@stores': path.resolve(__dirname, './src/shared/stores'),
      '@utils': path.resolve(__dirname, './src/shared/utils'),
    },
  },
});
