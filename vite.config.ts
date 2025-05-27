import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@auth": path.resolve(__dirname, "./src/auth"),
      "@journal": path.resolve(__dirname, "./src/journal"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@models": path.resolve(__dirname, "./src/models"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
    },
  },
  define: {
    "process.env.VITE_CLOUD_URL": JSON.stringify(process.env.VITE_CLOUD_URL),
    "process.env.VITE_CLOUD_API_KEY": JSON.stringify(
      process.env.VITE_CLOUD_API_KEY,
    ),
    "process.env.VITE_CLOUD_API_SECRET": JSON.stringify(
      process.env.VITE_CLOUD_API_SECRET,
    ),
    "process.env.VITE_CLOUD_NAME": JSON.stringify(process.env.VITE_CLOUD_NAME),
    "process.env.VITE_API_KEY": JSON.stringify(process.env.VITE_API_KEY),
    "process.env.VITE_AUTH_DOMAIN": JSON.stringify(
      process.env.VITE_AUTH_DOMAIN,
    ),
    "process.env.VITE_PROJECT_ID": JSON.stringify(process.env.VITE_PROJECT_ID),
    "process.env.VITE_STORAGE_BUCKET": JSON.stringify(
      process.env.VITE_STORAGE_BUCKET,
    ),
    "process.env.VITE_MESSAGING_SENDER_ID": JSON.stringify(
      process.env.VITE_MESSAGING_SENDER_ID,
    ),
    "process.env.VITE_APP_ID": JSON.stringify(process.env.VITE_APP_ID),
    "process.env.VITE_MEASUREMENT_ID": JSON.stringify(
      process.env.VITE_MEASUREMENT_ID,
    ),
  },
});
