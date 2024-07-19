export default defineNuxtConfig({
  extends: 'content-wind',
  routeRules: {
    '/': { prerender: true }
  },
  content: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
        sepia: 'monokai'
      }
    }
  }
})
