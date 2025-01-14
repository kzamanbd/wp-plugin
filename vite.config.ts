import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
    ],
    build: {
        outDir: 'assets/build',
        rollupOptions: {
            input: ['src/app.ts', 'src/app.css'],
            output: {
                assetFileNames: (chunkInfo: any) => {
                    let outDir = '';
                    // Fonts
                    if (/(ttf|woff|woff2|eot)$/.test(chunkInfo.name)) {
                        outDir = 'fonts';
                        return `${outDir}/[name][extname]`;
                    }

                    // SVG
                    if (/svg$/.test(chunkInfo.name)) {
                        outDir = 'images/svg';
                    }

                    // images
                    if (/(png|jpg|jpeg|gif|webp)$/.test(chunkInfo.name)) {
                        outDir = 'images';
                    }

                    // js
                    if (/js$/.test(chunkInfo.name)) {
                        outDir = 'js';
                    }

                    // css
                    if (/css$/.test(chunkInfo.name)) {
                        outDir = 'css';
                    }

                    return `${outDir}/[name][extname]`;
                },

                entryFileNames: 'js/[name].js'
            }
        }
    }
});
