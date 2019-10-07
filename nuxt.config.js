
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'WD Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My cool web development blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */

  loading: { color: '#fa923f', height: '4px', duration: 5000, failed: 'red' },
  //Note to self: loading happens on the server. For SPAs you can use loadingIndicator instead which happens on the client
  // loadingIndicator: {
	//   name: 'circle',
	//   color: '#fa923f'
  // },

  /*
  ** Global CSS
  */
  css: [
	  '~assets/styles/main.css'
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
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
	},
  env: {
		baseUrl: process.env.BASE_URL || 'https://nuxt-blog-1d733.firebaseio.com/'
  },
  router: {
	  extendRoutes(routes, resolve) {
		  routes.push({
			  path: '*',
			  component: resolve(__dirname, 'pages/index.vue')
		  })
	  }
  },
  transition: {
	  name: 'fade',
	  mode: 'out-in'
  }
}
