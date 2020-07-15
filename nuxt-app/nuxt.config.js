
export default {
  /*
  ** mode : 렌더링 모드 설정 
    'universal' 또는 'spa' 설정 가능
    'universal' : SSR / 'spa' : CSR 
  */
  mode: 'universal',
  /*
  ** Headers of the page
    렌더링 된 모든 HTML 페이지의 <head> 영역 정보를 여기서 설정
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      //반응형 웹 설정
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      //페이지 설명 설정
      // hid 속성 값은 렌더링 후, data-hid로 설정(표준 속성이 아님)
      // hid 속성은 고유 식별자로 사용됨
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    //링크 설정
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    //스크립트 설정
    // script : [
    //   { src : '' }
    // ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS -> 모든 페이지에 반영되는 css
  
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-fullpage.js',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  bootstrapVue: {
    icons: true // Install the IconsPlugin (in addition to BootStrapVue plugin
  },

  axios: {
    // proxy: true,
    headers: {
      common: {
        'Host': 'dapi.kakao.com',
        'Authorization': 'KakaoAK 6dbe02f3edc0d0f578465215cd97f0d8'
      }
      
    }

    
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
