import { defineConfig } from 'vite';
import terser from '@rollup/plugin-terser';

export default defineConfig({
  root: './',
  build: {
    outDir: 'distvite',
    rollupOptions: {
      input: 'dist/assets/something.js',
      output: {
        dir: 'output',
        format: 'cjs',
      },
      plugins: [terser()],
    },
  },
});
