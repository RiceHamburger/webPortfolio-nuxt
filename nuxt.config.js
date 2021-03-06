import en from "./locales/en.js"
import jp from "./locales/jp.js"
import tw from "./locales/tw.js"
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "NO-DATA",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.min.js" },
      { src: "https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/animate.min.css',
    '~/assets/css/style.css',
    '~/assets/css/responsive.css',
    '~/assets/css/notifications.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/aos.js', mode: 'client' },
    { src: '~/plugins/notification.js'},
    { src: '~/plugins/isotope.js', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    'nuxt-fontawesome',
    'nuxt-i18n'
  ],
  fontawesome:{
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
    ]
  },
  i18n: {
    locales: ['zh-tw', 'en', 'jp'],
    defaultLocale: 'jp',
    vueI18n: {
      fallbackLocale: 'jp',
       messages: {
         "zh-tw": tw,
         en: en,
         jp: jp
       }
     }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]]
    },
    extend (config, ctx) {
      config.node = {
        fs: "empty"
      }
    }
  },
  router: {
    linkExactActiveClass: 'active',
  },
  loading: {
    color: 'blue',
    height: '5px'
  },
  // publicRuntimeConfig: {
  //   axios: {
  //     baseURL: 'http://em.no-data.xyz/api/'
  //   }
  // }
};
