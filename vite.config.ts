import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "pokemonMicrofront",
      filename: "remoteEntry.js",
      exposes: {
        "./PokemonDetail": "./src/components/PokemonDetail.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    modulePreload: false,
    rollupOptions: {
      output: {
        format: "esm",
      },
    },
  },
  server: {
    port: 3001,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/javascript",
    },
  },
});
