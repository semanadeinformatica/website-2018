module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'semana de informática 2018',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#000000' },
      { hid: 'description', name: 'description', content: 'A Semana de Informática é um evento que decorre nos dias 29 de outubro a 1 de novembro, na Faculdade de Engenharia da Universidade do Porto, onde alunos vão poder passar 4 dias a aprender com especialistas nas diversas áreas de informática, familiarizar-se com o mundo empresarial e conviverem em competições e eventos sociais.' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: "180x180", href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: "#da291c" },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'msapplication-TileColor', content: "#b91d47" },
      { rel: 'msapplication-config', content: "/browserconfig.xml" },
    ]
  },

  css: [
    '@/assets/scss/custom.scss'
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },


  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  modules: [
    // dotenv
    '@nuxtjs/dotenv',

    ['@nuxtjs/google-analytics', {
      id: process.env.GOOGLE_ANALYTICS_ID
    }],
  ]
}
