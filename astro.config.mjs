// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://k4rlos.dev',
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;

        return pathname !== '/404' && pathname !== '/404.html';
      }
    })
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Russo One',
      cssVariable: '--font-russo-one',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/fonts/RussoOne-Regular.woff2'],
            weight: 400,
            style: 'normal'
          }
        ]
      }
    },
    {
      provider: fontProviders.local(),
      name: 'Cloister Black',
      cssVariable: '--font-cloister-black',
      fallbacks: ['serif'],
      options: {
        variants: [
          {
            src: ['./src/fonts/CloisterBlack.woff2'],
            weight: 400,
            style: 'normal'
          }
        ]
      }
    },
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-inter-family',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/fonts/Inter-Regular.woff2'],
            weight: 400,
            style: 'normal'
          }
        ]
      }
    }
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
