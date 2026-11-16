import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' - зібрану сторінку можна відкрити з будь-якої теки сервера
export default defineConfig({
  base: './',
  plugins: [react()],
})
