<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-ssr
      </h1>
      <h2 class="subtitle">
        Explorando Marte con Curiosity
      </h2>
      <div class="photos">
        <!--
        <div class="image" v-for="(item, index) in contact.links" :key="index">
          
        </div>
        -->
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import { mapState } from 'vuex';

import Logo from '~/components/Logo.vue'

export default {
  head () {
    return {
      title: `Rover curiosity de la Nasa | Expedición en Marte`
    }
  },
  components: {
    Logo
  },
  async fetch({ app, store }) {
    console.log("*****FETCH DEL INDEX*****");
    //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=nlgCNzPbHfD2NqTx3LHUoU4cobCu0vmAdY4FRTgZ
    let photos = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=nlgCNzPbHfD2NqTx3LHUoU4cobCu0vmAdY4FRTgZ`);

    console.log("photos");
    console.log(photos.data);

  },
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
</style>
