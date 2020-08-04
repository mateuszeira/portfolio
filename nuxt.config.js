export default {
  mode: 'universal',
  target: 'server',
  head: {
    title: 'TheDrone7',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'TheDrone7\'s portfolio.'  }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/main.css'
  ],
  components: true,
  build: {
  }
}
