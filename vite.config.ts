/// <reference types="vitest" />
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import camelCase from 'camelcase';
import packageJson from './package.json';

const packageName = packageJson.name.split('/').pop() || packageJson.name;

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs', 'umd', 'iife'],
      name: camelCase('index', { pascalCase: true }),
      fileName: 'index',
    },
  },
  plugins: [dts({ rollupTypes: true })],
  test: {},
});
