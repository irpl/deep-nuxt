export default {
  target: "static",
  server: {
    host: "0.0.0.0",
    port: 3001
  },
  head: {
    title: "Phillip Logan — Software Developer & Educator",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Personal site of Phillip Logan — software developer, IoT enthusiast, and educator based in Jamaica."
      },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "og:title",
        property: "og:title",
        content: "Phillip Logan — Software Developer & Educator"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Personal site of Phillip Logan — software developer, IoT enthusiast, and educator based in Jamaica."
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://philliplogan.com"
      },
      { hid: "twitter:card", name: "twitter:card", content: "summary" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: ["@fortawesome/fontawesome-svg-core/styles.css"],

  plugins: ["~/plugins/fontawesome.js"],

  components: true,

  modules: ["@nuxt/content"]
};
