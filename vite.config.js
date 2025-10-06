import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
plugins: [react()],
base: '/ELIA_BarberShop_WebSite', // 👈 match your repo name exactly (case-sensitive)
})