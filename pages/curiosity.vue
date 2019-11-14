<template>
  <div class="container">
    <div>
      <button class="backto" @click="backto">ATRAS</button>
      <h1 class="title">
        OTRA PAGINA
      </h1>
      <h2 class="subtitle">
        Explorando Marte con Curiosity
      </h2>
      <img class="batlecruiser" src="~/assets/images/curiosityselfiemay2019.jpg" alt="curiosityselfiemay2019">
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import { mapState } from 'vuex';

import Logo from '~/components/Logo.vue';

export default {
  name : "Curiosity",
  components: {
    Logo
  },
  data () {
      return {
        //data: {}
      }
    },
  computed: {
    ...mapState({
      data: state => state.data
    })
  },
  created() {
    return axios.get('https://api.nasa.gov/planetary/apod?api_key=nlgCNzPbHfD2NqTx3LHUoU4cobCu0vmAdY4FRTgZ')
      .then(json => {
        //this.data = json.data;
        this.$store.commit('setData', json.data);
      })


  },
  beforeMount() {

  },
  mounted() {

  },
  methods: {
    backto(){
      this.$router.back();
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.batlecruiser{
  width: 550px;
}
.photos{
  text-align: left;
  padding-top: 20px;
}
.day-container{
  text-align: center;
  padding-top: 20px;
}
.image-of-day{
  width: 600px;
}
.bold{
  font-weight: bold;
}
p{
  padding-top: 10px;
}
</style>
