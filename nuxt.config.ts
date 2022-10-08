// https://v3.nuxtjs.org/api/configuration/nuxt.config
import AutoImport from 'unplugin-auto-import/vite'
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


//const lifecycle = process.env.npm_lifecycle_event;

export default defineNuxtConfig({
  head:{
    bodyAttrs:{
      class:'body-class'
    },
  } , 
  target: "static",
    // ssr: false
    vite: {
      plugins: [
          AutoImport({
              resolvers: [ElementPlusResolver()]
          }),
          Components({
              dts: true,
              resolvers: [ElementPlusResolver()]
          }),
          
      ],
    },
    // css
    css: [
      "~/assets/scss/index.scss",
      "element-plus/theme-chalk/index.css"
    ],
    // build
    build: {
        //transpile: lifecycle === "build" ? ["element-plus"] : [],
        transpile:["element-plus"],
    },
    script:[
      {
        src:"js/flexible.js",
        type:"text/javascript",
        charset:"utf-8"
      }
    ]
})
