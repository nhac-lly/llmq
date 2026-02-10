import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'public/sdk', // Build to public so it's simple to serve/test
        lib: {
            entry: path.resolve(__dirname, 'app/lib/dashboard-sdk/widget.tsx'),
            name: 'DashboardWidget',
            fileName: (format) => `dashboard-widget.${format}.js`
        },
        rollupOptions: {
            // Ensure we bundle React/ReactDOM for the widget usage (since the host page might not have them)
            // OR expternalize them. For a "drop-in script", we usually bundle them or use a UMD.
            // Let's bundle them for simplicity of usage (one script tag).
            external: [],
        }
    },
    define: {
        'process.env': {} // Fix for some libs that expect process.env
    }
});
