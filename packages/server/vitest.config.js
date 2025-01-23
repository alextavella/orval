import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    setupFiles: './vitest.setup.ts',
  },
  environments: {
    DB_FILE_NAME: 'file:local.db'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})