import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.tecnochui.com.ve',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwind()],
  },
});