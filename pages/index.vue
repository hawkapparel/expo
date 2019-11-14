<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-ssr
      </h1>
      <h2 class="subtitle">
        <nuxt-link to="/curiosity">Explorando Marte con Curiosity</nuxt-link>
      </h2>
      <img class="batlecruiser" src="~/assets/images/batlecruiser.jpg" alt="batlecruiser">
      <div class="photos">
        <h3>Foto del día de la NASA</h3>
        <p><strong>Copyright:</strong> {{ data.copyright }}</p>
        <p><strong>Fecha:</strong> {{ data.date }}</p>
        <p><strong>Explicación:</strong></p>
        <p>{{ data.explanation }}</p>
        <p><strong>Nombre de la foto:</strong> {{ data.title }}</p>
        <div class="day-container">
          <img class="image-of-day" :src="data.hdurl">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import { mapState } from 'vuex';

import Logo from '~/components/Logo.vue'

export default {
  head() {
    return {
      title: this.data.title,
      meta: [
        { hid: 'description',
          name: 'description',
          content: this.data.explanation
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.data.title
        },
        {
          property: 'og:description',
          content: this.data.explanation
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: '/'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.data.url
        },
      ],
    };
  },
  components: {
    Logo
  },
  async fetch({ app, store }) {
    console.log("*****FETCH DEL INDEX*****");
    //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=nlgCNzPbHfD2NqTx3LHUoU4cobCu0vmAdY4FRTgZ
    let photos = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=nlgCNzPbHfD2NqTx3LHUoU4cobCu0vmAdY4FRTgZ`);

    console.log("photos");
    console.log(photos.data);
    store.commit('setData', photos.data);

  },
  computed: {
      ...mapState({
        data: state => state.data
      })
    },
}
</script>

<style>
.container {
  max-width: 1200px;
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
