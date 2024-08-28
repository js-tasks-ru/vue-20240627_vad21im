import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MainParams',
  props: {
    geographicName: {
      type: String,
    },

    current: {
      type: Object,
    },

    iconArr: {
      type: Object,
    }
  },

  template: `
    <div>
      <h2 class="weather-card__name">
        {{geographicName}}
      </h2>
      <div class="weather-card__time">
        {{current.dt}}
      </div>
    </div>
    <div class="weather-conditions">
      <div class="weather-conditions__icon" :title="current.weather.description">{{iconArr[current.weather.id]}}</div>
      <div class="weather-conditions__temp">{{(current.temp - 273.15).toFixed(1)}} °C</div>
    </div>
  `
})
