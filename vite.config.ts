import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/belfer_center_dets_index_2025/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
