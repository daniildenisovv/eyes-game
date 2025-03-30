import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//@ts-ignore
import tailwindcss from '@tailwindcss/vite';
import checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss(),
    checker({
      typescript: {
        tsconfigPath: 'tsconfig.app.json',
        buildMode: command !== 'serve',
      },
    }),
  ],
}));
