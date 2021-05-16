<template>

  <div class="birre">

    <div class="btn">

      <button type="button" name="prevBtn" @click="prevPage(), scrollToTop()"><i class="fas fa-arrow-left"></i>
      </button>
      <button type="button" name="nextBtn" @click="nextPage(), scrollToTop()"><i class="fas fa-arrow-right"></i>
      </button>
      <br>
      <button id="return" type="button" name="return" @click="returnToFirst()">Return to Page 1
      </button>
      <h2>Page {{page}}</h2>
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
          <div class="overlay-top">
            <div class="overlay-top-left">
              <h5>INGREDIENTS</h5>
              <h5>MALT</h5>
              <ul>
                <li>{{beer.ingredients.malt[0].name}}</li>
              </ul>
              <h5>HOPS</h5>
              <ul>
                <li>{{beer.ingredients.hops[0].name}}</li>
              </ul>
              <h5>YEAST</h5>
              <ul>
                <li>{{beer.ingredients.yeast}}</li>
              </ul>
            </div>
            <div class="overlay-top-right">
              <h5>FOOD PAIRING</h5>
              <ul>
                <li>{{beer.food_pairing[0]}}</li>
                <li>{{beer.food_pairing[1]}}</li>
                <li>{{beer.food_pairing[2]}}</li>
              </ul>
            </div>
          </div>
          <div class="overlay-bottom">
            <h5>BREWERS TIPS</h5>
            <p>
              {{beer.brewers_tips}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="btn">
      <h2>Page {{page}}</h2>
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
          .then(result => this.beers = result.data);
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
     },
      returnToFirst() {
        this.page=1;
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

  .btn {
    background-color: #6D3814;
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

  #return {
    width: 200px;
    font-size: 20px;
  }

  i {
    color: #5D3926;
    font-size: 30px;
  }

  .container {
    width: 100%;
    background-color: #6D3814;
    padding: 50px 50px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .details {
    position: relative;
    background-color: whitesmoke;
    width: calc(100% / 2 - 90px);
    height: 340px;
    margin: 10px 45px;
    overflow: hidden;
    border: 4px solid #3C2C23;
    border-radius: 25px;
    cursor: pointer;
  }

  .btn h2 {
    color: #FFD23F;
  }

  h4 {
    margin-bottom: 30px;
  }

  h5 {
    font-size: 18px;
  }

  p {
    font-family: 'KoHo', sans-serif;
    font-size: 14px;
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
    padding-top: 25px;
  }

  .info-beer {
    height: 100%;
    width: 65%;
    float: right;
    padding: 5px;
    background-image: url('/Beer-Texture.jpg');
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
    background-color: #F9CA02;
    padding: 5px;
  }

  .overlay-top {
    height: 50%;
    width: 100%;
  }

  .overlay-top-left {
    height: 100%;
    width: 50%;
    float: left;
  }

  .overlay-top-right {
    height: 100%;
    width: 50%;
    float: left;
  }

  .overlay-bottom {
    height: 50%;
    width: 100%;
    padding: 5px;
  }

  .overlay li {
    list-style: none;
  }

  .details:hover .overlay {
    opacity: 1;
    transition-duration: 1s;
  }

  @media screen and (max-width: 1024px) {
        .details {
            width: calc(100% / 1 - 90px);
        }

    }

</style>
