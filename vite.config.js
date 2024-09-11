import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "TrendyMovies",
        short_name: "TrendyMovies",
        description: "Find trending movies here",
        theme_color: "#353F48",
        icons: [
          {
            src: '/logo-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: '/logo-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
        ]
      }
    })
  ],
})
