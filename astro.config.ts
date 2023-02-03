import { defineConfig } from 'astro/config'

// alternative, use '@astrojs/vercel/edge'
import vercel from '@astrojs/vercel/serverless'
import image from '@astrojs/image'

// plugin remark
import { readingTimeRemarkPlugin } from './src/utils/frontmatter'

// https://astro.build/config
export default defineConfig({
  site: 'https://rizkysaskiaputra.github.io/',
  base: '/',
  output: 'server',
  adapter: vercel(),
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
  build: {
    format: 'directory',
  },
  markdown: {
    gfm: true,
    smartypants: true,
    remarkPlugins: [readingTimeRemarkPlugin],
  },
})
