// Konfigurasi Vite (alat untuk menjalankan & membangun website).
// Biasanya file ini tidak perlu diubah.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
