<template>

    <div class="birre">
      <!-- <Title value="Birre" /> -->
      <h2>Pagina {{page}}</h2>
      <div class="btn">
        <button type="button" name="prevBtn" @click="prevPage(), scrollToTop()"><i class="fas fa-arrow-left"></i></button>
        <button type="button" name="nextBtn" @click="nextPage(), scrollToTop()"><i class="fas fa-arrow-right"></i></button>
      </div>



    <div class="container" v-if="beers.length > 0">
      <div class="details" v-for="beer in beers" :key="beer.id">
        <router-link to="/dettaglio/:id">
          <div class="info-beer">
            <h2>{{beer.name}}</h2>
            <h4>{{beer.tagline}}</h4>
            <p>{{beer.description}}</p>

          </div>
          <div class="img-beer">
            <div class="img-beer-top">
              <img v-if="beer.image_url != null" :src="beer.image_url" alt="beer-img">
            </div>
            <div class="img-beer-bottom">
              <h5>Grado alcolico: {{beer.abv}}%</h5>
            </div>
          </div>
        </router-link>
      </div>

    </div>
    <div class="btn">
      <button type="button" name="prevBtn" @click="prevPage(), scrollToTop()"><i class="fas fa-arrow-left"></i></button>
      <button type="button" name="nextBtn" @click="nextPage(), scrollToTop()"><i class="fas fa-arrow-right"></i></button>
    </div>
    <footer></footer>

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
    },
    scrollToTop() {
      window.scrollTo(0,0);
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
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin: 5px;
  background-color: #FFD23F;
  cursor: pointer;
}

i {
  color: white;
  font-size: 30px;
}



.container {
  width: 100%;
  /* height: 100vh; */
  background-color: white;
  padding: 50px 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}

.details {
  background-color: whitesmoke;
  width: calc(100% / 2 - 20px);
  height: 340px;
  margin: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 4px solid #3C2C23;
  border-radius: 25px;
}

h4 {
  margin-bottom: 30px;
}

h5 {
  margin-top: 15px;
  font-size: 18px;
}

p {
  font-family: 'KoHo', sans-serif;
  font-size: 15px;
  font-weight: bold;
}

.details:hover {
  transform: translatey(-10px);
  transition: 0.5s;
}

.img-beer {
  height: 100%;
  width: 35%;
  padding: 20px;
  float: left;
  border-right: 2px solid #3C2C23;
}

.img-beer-top {
  height: 80%;
}

.img-beer-bottom {
  height: 20%;
  padding: 5px;
}

.info-beer {
  height: 100%;
  width: 65%;
  float: right;
  padding: 5px;
  background-image: url('https://f.vividscreen.info/soft/60f60e41ad82985d44a51f9cd4109c4e/Beer-Texture-1920x1080.jpg');
  background-size: cover;
}

img {
  height: 100%;
}

footer {
  height: 150px;
  background-color: #FFD23F;
}

</style>
