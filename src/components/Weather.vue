<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="weather-card one">
          <div class="top">
            <div class="wrapper">
              <h1 class="heading">{{data.weather[0].description.toUpperCase()}}</h1>
              <h3 class="location">{{data.name}}</h3>
              <p class="temp">
                <span class="temp-value">{{ temp }}</span>
                <span class="deg">0</span>
                <a href="javascript:;"><span class="temp-type">C</span></a>
              </p>
            </div>
          </div>
          <div class="bottom">
            <div class="wrapper">
              <ul class="forecast mt-4">
                <li>
                  <span class="date">
                    <i class="fas fa-tint"></i> Humedad
                  </span>
                  <span class="lnr condition">
                    <span class="temp"
                      ><span class="humidity">{{humidity}}</span
                      ><span class="temp-type"> %</span></span
                    >
                  </span>
                </li>
                <li>
                  <span class="date"> <i class="fas fa-wind"></i> Viento </span>
                  <span class="lnr condition">
                    <span class="temp"
                      ><span class="wind-speed">{{data.wind.speed}}</span
                      ><span class="temp-type"> m/s</span></span
                    >
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Weather",
  props: {
    data: {
      type: Object,
      default: () => {
        return null;
      },
    },
  },
  computed: {
    temp() {
      return Math.ceil(this.data.main.temp);
    },
    humidity(){
      return this.data.main.humidity;
    }
  },
};
</script>
