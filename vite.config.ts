import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? 'https://github.com/Davidflik/frontend-rocks/actions/runs/13697789331/job/38304060186' : '/',
  plugins: [react(), tailwindcss()],
})
