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
        name: "",
        short_name: "Ubanite",
        description: "Find a home today",
        theme_color: "#ffffff",
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
            src: '/logo-splash-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
        ],
        display: "standalone",
        background_color: "#ffffff"
      }
    })
  ],
})
