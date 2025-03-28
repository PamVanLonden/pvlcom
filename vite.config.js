import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import Sitemap from 'vite-plugin-sitemap';


// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    Sitemap({ exclude: ['/cart', '/cart/venmo', '/cart/checkout-form', '/legal', '/social'] }),
  ],
});
