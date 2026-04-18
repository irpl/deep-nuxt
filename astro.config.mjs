import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://philliplogan.com",
  integrations: [icon()],
  server: {
    host: "0.0.0.0",
    port: 3001
  }
});
