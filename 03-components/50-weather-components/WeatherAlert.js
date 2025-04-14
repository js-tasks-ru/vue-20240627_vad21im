import { defineComponent } from 'vue'
export default defineComponent({
  name: "WeatherAlert",
  props: {
    senderName: {
      type: String,
    },

    description: {
      type: String,
    },
  },

  template: `
    <div class="weather-alert">
      <span class="weather-alert__icon">⚠️</span>
      <span class="weather-alert__description">{{senderName}}<br>{{description}}</span>
    </div>
  `
})
