// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css","~/assets/css/style.min.css"],
  script: [
    {
      src: "bootstrap/dist/js/bootstrap.bundle.min.js",
    },
  ],
});
