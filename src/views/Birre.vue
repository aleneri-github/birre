<template>

    <div class="birre">
      <!-- <Title value="Birre" /> -->
      <h2>Pagina corrente: {{page}}</h2>
      <div class="btn">
        <button type="button" name="prevBtn" @click="prevPage()"><i class="fas fa-arrow-circle-left"></i></button>
        <button type="button" name="nextBtn" @click="nextPage()"><i class="fas fa-arrow-circle-right"></i></button>
      </div>



    <div class="container" v-if="beers.length > 0">
      <div class="details" v-for="beer in beers" :key="beer.id">
        <h3>{{beer.name}}</h3>
        <h5>{{beer.tagline}}</h5>
        <img :src="beer.image_url" alt="beer-img">
        <!-- <p>{{beer.description}}</p> -->
      </div>


    </div>

  </div>
</template>

<script>
// import Title from "../components/Title";
import axios from 'axios';

export default {
  // components: {
  //   Title
  // },
  created() {
    // page è una variabile che cambia al click sui pulsanti
    this.getBeers();
  },
  data() {
    return {
      beers: [],
      page: 1,
    }
  },
  methods: {
    getBeers() {
      axios.get(`https://api.punkapi.com/v2/beers?page=${this.page}&per_page=10`)
        .then(result => this.beers = result.data)
        .catch(error => console.log(error));
    },
    prevPage() {
      if (this.page >= 2) {
        this.page--;
        this.getBeers();
      }
    },
    nextPage() {
      this.page++;
      this.getBeers();
    }
  }
}
</script>

<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

button {
  width: 70px;
  height: 50px;
}

.birre {
  background-color: #543233;
}

.container {
  width: 100%;
  background-color: #543233;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}

.details {
  background-color: white;
  width: calc(100% / 3 - 50px);
  margin: 25px;
  padding: 10px;
  cursor: pointer;
  border: 4px solid #3C2C23;
}

.details:hover {
  transform: scale(1.1);
}

img {
  height: 200px;
}

</style>
