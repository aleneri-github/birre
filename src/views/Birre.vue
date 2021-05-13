<template>

  <div class="birre">

    <div class="btn">
      <button type="button" name="prevBtn" @click="prevPage(), scrollToTop()"><i class="fas fa-arrow-left"></i>
      </button>
      <button type="button" name="nextBtn" @click="nextPage(), scrollToTop()"><i class="fas fa-arrow-right"></i>
      </button>
      <h2>Pagina {{page}}</h2>
    </div>

    <div class="container" v-if="beers.length > 0">
      <div class="details" v-for="beer in beers" :key="beer.id">
        <div class="info-beer">
          <h2>{{beer.name}}</h2>
          <h4>{{beer.tagline}}</h4>
          <p>{{beer.description}}</p>
        </div>
        <div class="img-beer">
          <div class="img-beer-top">
            <img :src="beer.image_url == null ? '/immagine-non-disponibile.jpg' : beer.image_url">
          </div>
          <div class="img-beer-bottom">
            <h5>Grado alcolico: {{beer.abv}}%</h5>
          </div>
        </div>
        <div class="overlay">

        </div>
      </div>
    </div>
    <div class="btn">
      <h2>Pagina {{page}}</h2>
      <button type="button" name="prevBtn" @click="prevPage(), scrollToTop()"><i class="fas fa-arrow-left"></i>
      </button>
      <button type="button" name="nextBtn" @click="nextPage(), scrollToTop()"><i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    created() {
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
        if (this.beers.length > 0) {
          this.page++;
          this.getBeers();
        }
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

  .btn {
    background-image: url('https://thumbs.dreamstime.com/b/texture-brown-wood-table-restaurant-bar-natural-top-wiev-133355373.jpg');
  }

  button {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 5px;
    background-color: #FFD23F;
    cursor: pointer;
    border: 2px solid #5D3926;
  }

  i {
    color: #5D3926;
    font-size: 30px;
  }

  .container {
    width: 100%;
    background-image: url('https://thumbs.dreamstime.com/b/texture-brown-wood-table-restaurant-bar-natural-top-wiev-133355373.jpg');
    padding: 50px 100px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .details {
    position: relative;
    background-color: whitesmoke;
    width: calc(100% / 2 - 20px);
    height: 340px;
    margin: 10px;
    overflow: hidden;
    border: 4px solid #3C2C23;
    border-radius: 25px;
  }

  .btn h2 {
    color: #FFD23F;
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

  .overlay {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: white;
  }

  .details:hover .overlay {
    opacity: 1;
    transition-duration: 1s;
  }

</style>
