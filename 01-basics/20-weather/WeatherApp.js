import { defineComponent } from 'vue/dist/vue.esm-bundler.js'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',
  setup(){
    const weatherDataArr = getWeatherData()
    const weatherConditionIconsArr = WeatherConditionIcons
    function blackandwhite(current){
      let time = Number(current?.dt.replace(':',''))
      let sunrise = Number(current?.sunrise.replace(':',''))
      let sunset = Number(current?.sunset.replace(':',''))
      return time > sunrise && time < sunset
    }
    return{
      weatherDataArr,
      weatherConditionIconsArr,
      blackandwhite
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul v-for="item in weatherDataArr" class="weather-list unstyled-list" style="margin-bottom: 8px">
        <p>{{item}}</p>
        <li class="weather-card" :class="!blackandwhite(item.current)?'weather-card--night':''">
          <div v-if="item.alert" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{item.alert.sender_name}}<br>{{item.alert.description}}</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{item.geographic_name}}
            </h2>
            <div class="weather-card__time">
              {{item.current.dt}}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="item.current.weather.description">{{weatherConditionIconsArr[item.current.weather.id]}}</div>
            <div class="weather-conditions__temp">{{(item.current.temp - 273.15).toFixed(1)}} °C</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{(item.current.pressure * 0.75).toFixed(0)}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{item.current.humidity}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{item.current.clouds}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{item.current.wind_speed}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
