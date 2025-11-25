import { defineConfig } from 'vite';
import jsr from "@jsr/rollup-plugin-jsr";

export default defineConfig({
  plugins: [
    jsr()
  ]
});
