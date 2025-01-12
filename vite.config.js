import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Escucha en todas las interfaces (0.0.0.0)
    port: 5173, // Opcional: Cambia el puerto si el 5173 está ocupado
  },
});
