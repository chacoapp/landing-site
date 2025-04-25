// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//     plugins: [react()],
//     base: '/landing-site/',
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/landing-site/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        emptyOutDir: true,
    }
})