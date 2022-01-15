<template>
  <div>
    <div class="p-3">
      <label class="text-white">Selecciona ubicación</label>
      <select
        class="form-control"
        v-model="city"
      >
        <option v-for="location in availableLocations" :key="location.value" :value="location.value">{{location.label}}</option>
      </select>
    </div>
    <weather :data="data" />
  </div>
</template>



<script>
import Weather from "./components/Weather.vue";

export default {
  name: "App",
  components: {
    Weather,
  },
  data() {
    return {
      availableLocations: [
        {label: 'Almería', value: 'almeria,es'},
        {label: 'Sevilla', value: 'sevilla,es'},
        {label: 'Huelva', value: 'huelva,es'},
        {label: 'Córdoba', value: 'cordoba,es'},
        {label: 'Málaga', value: 'malaga,es'},
        {label: 'Jaén', value: 'jaen,es'},
        {label: 'Cádiz', value: 'cadiz,es'},
        {label: 'Granada', value: 'granada,es'},
      ],
      data: null,
      city: null,
    };
  },
  methods: {
    async loadData() {
      if (!this.city) {
        return;
      }
      try {
        const apiKey = "3408896f1d019f9845f9f0726d4dab41";
        const units = "metric";
        const lang = "es";
        const url = `/weather?q=${this.city}&appid=${apiKey}&units=${units}&lang=${lang}`;
        const response = await this.axios.get(url);
        const data = await response.data;
        this.data = data;
      } catch (e) {
        console.error(e.message);
      }
    }
  },
  async mounted() {
    this.loadData()
  },
  watch: {
    city(){
      this.loadData()
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
