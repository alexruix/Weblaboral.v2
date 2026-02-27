// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-expect-error - Vite plugin types mismatch with Astro's Vite types
    plugins: [tailwindcss()],
  },
});