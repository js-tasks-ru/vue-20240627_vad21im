import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import './WeatherApp.css'
import WeatherAlert from "./WeatherAlert.js";
import MainParams from "./MainParams.js";
import SecondaryParams from "./SecondaryParams.js";

export default defineComponent({
  name: 'WeatherApp',
  components: {SecondaryParams, MainParams, WeatherAlert},

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
        <li class="weather-card " :class="{'weather-card--night':!blackandwhite(item.current)}">
          <weather-alert v-if="item.alert" :senderName="item.alert.sender_name" :description="item.alert.description"/>

          <main-params :geographic-name="item.geographic_name" :current="item.current"
                       :icon-arr="weatherConditionIconsArr"/>

          <secondary-params :current="item.current"  />

        </li>
      </ul>
    </div>
  `,
})
