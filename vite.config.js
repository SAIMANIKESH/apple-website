import { sentryVitePlugin } from "@sentry/vite-plugin";
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss(), sentryVitePlugin({
    org: "jsm-h5",
    project: "javascript-react",
  })],

  build: {
    sourcemap: true,
  }
})