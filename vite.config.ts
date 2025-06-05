import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Backpackers/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
