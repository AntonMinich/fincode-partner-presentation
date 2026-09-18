import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/fincode-partner-presentation/',
  plugins: [react()],
});
