import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main:                resolve(__dirname, 'index.html'),
        comunidade:          resolve(__dirname, 'comunidade/index.html'),
        admin:               resolve(__dirname, 'admin/index.html'),
        politicaTrocas:      resolve(__dirname, 'politica-de-trocas.html'),
        politicaPrivacidade: resolve(__dirname, 'politica-de-privacidade.html'),
        termosDeUso:         resolve(__dirname, 'termos-de-uso.html'),
      }
    }
  }
})
