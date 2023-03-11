// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/bootstrap.min.css", "~/assets/css/style.min.css"],
  script: [
    {
      src: "bootstrap/dist/js/bootstrap.bundle.min.js",
    },
  ],
  modules: ["nuxt-icon", "@unocss/nuxt"],
  scrollBehavior: function (to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
