import {computed, defineComponent, ref, watch} from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    let leftNum = ref(0)
    let rightNum = ref(0)
    let operation = ref('')

    const result = computed(() => {
      switch(operation.value) {
        case 'sum':
          return leftNum.value + rightNum.value
        case 'subtract':
          return leftNum.value - rightNum.value
        case 'multiply':
          return leftNum.value * rightNum.value
        case 'divide':
          return leftNum.value / rightNum.value
      }
    })

    return {
      leftNum,
      rightNum,
      operation,
      result
    }

  },

  template: `
    <div class="calculator">
      <input v-model="leftNum" type="number" aria-label="First operand" />

      <div class="calculator__operators">
        <label><input v-model="operation" type="radio" name="operator" value="sum"/>➕</label>
        <label><input v-model="operation" type="radio" name="operator" value="subtract"/>➖</label>
        <label><input v-model="operation" type="radio" name="operator" value="multiply"/>✖</label>
        <label><input v-model="operation" type="radio" name="operator" value="divide"/>➗</label>
      </div>

      <input v-model="rightNum" type="number" aria-label="Second operand" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
