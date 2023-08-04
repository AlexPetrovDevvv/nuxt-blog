// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: [
        "~/assets/style.css",
    ],
    modules: [
        "@nuxtjs/google-fonts",
        '@pinia/nuxt',
    ],
    googleFonts: {
        families: {
            'Roboto': [400, 500, 700],
            'Quattrocento Sans': [400, 700],
            'Oswald': [400, 500, 700],
            'Herr Von Muellerhoff': [400],
        },
    },
    pinia: {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    app: {
        head: {
            bodyAttrs: {
                class: 'home page page-template page-template-template-portfolio page-template-template-portfolio-php'
            }
        }
    }
})
