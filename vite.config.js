import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ELIA_BarberShop_WebSite/",  // <-- exact repo name, exact casing
  plugins: [react()],
});
