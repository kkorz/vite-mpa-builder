import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy'; // ie11兼容
import { generateEntries } from './script';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: generateEntries(['**/index.html']),
      // input: {
      //   index: path.resolve(__dirname, 'html/index.html'),
      //   count: path.resolve(__dirname, 'html/count.html'),
      // },
    },
  },
});
