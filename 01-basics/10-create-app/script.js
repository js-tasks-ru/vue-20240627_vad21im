import { defineComponent, createApp } from 'vue/dist/vue.esm-bundler.js'

const App = defineComponent({
  name: 'App',

  setup(){
    const date = `Сегодня ${new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' })}`

    return {
      date
    }


  },

  template: `<div>{{ date }}</div>`
})

const app = createApp(App)

app.mount('#app')

