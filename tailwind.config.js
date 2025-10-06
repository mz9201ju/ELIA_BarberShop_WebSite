/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: '#0f172a', // slate-900 base
                    card: '#111827', // gray-900 cards
                    accent: '#f59e0b', // amber-500 accent (gold vibe)
                    red: '#ef4444', // red-500 highlights
                    text: '#f8fafc', // slate-50 text
                    sub: '#94a3b8' // slate-400 subtext
                }
            },
            boxShadow: {
                soft: '0 10px 25px rgba(0,0,0,0.15)'
            },
            borderRadius: {
                xl2: '1.25rem'
            }
        },
    },
    plugins: [],
}