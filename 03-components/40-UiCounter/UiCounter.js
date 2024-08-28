import {defineComponent, toRefs, defineEmits} from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
    },

    min: {
      type: Number,
      default: 0
    },

    max: {
      type: Number,
      default: Infinity
    }
  },

  emit: ['update:count'],

  setup(props,ctx) {
    const { count } = toRefs(props)
    function plus(){
      ctx.emit('update:count', count.value + 1)
    }

    function minus(){
      ctx.emit('update:count', count.value - 1)
    }

    return {
      plus,
      minus,

    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled="count<=min" @click="minus">➖</UiButton>
      <span class="count" data-testid="count">{{count}}</span>
      <UiButton aria-label="Increment" :disabled="count>=max" @click="plus">➕</UiButton>
    </div>
  `,
})
