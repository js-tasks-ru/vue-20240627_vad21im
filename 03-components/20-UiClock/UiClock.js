import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    let clock = ref('')
    setInterval(()=>{
      clock.value = new Date().toLocaleString('default', { timeStyle: 'medium' });
    }, 1000)
    return {
      clock,
    }
  },

  template: `<div class="clock">{{clock}}</div>`,
})
