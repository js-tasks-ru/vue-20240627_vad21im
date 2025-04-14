import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    let count = ref(0)
    function countUp() {
      count.value++
    }
    function countDown() {
      count.value--
    }
    return { count, countUp, countDown }
  },

  template: `
    <div class="counter">
      <button
        @click="countDown"
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="!(count > 0)"
      >➖
      </button>

      <span class="count" data-testid="count">{{ count }}</span>

      <button
        @click="countUp"
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="!(count < 5)"
      >➕
      </button>
    </div>
  `,
})
