<template>
  <div class="home">
    <router-link to="/birre">
      <img class="animated infinite tada" id="logo" src="/birre-manicomio.jpg" alt="logo">
    </router-link>
  </div>
</template>

<script>

</script>

<style>
  .home {
    position: relative;
    height: calc(100vh - 86px);
    background-image: url('https://st.depositphotos.com/2471189/4132/i/950/depositphotos_41321775-stock-photo-beer-texture.jpg');
    background-size: cover;
    background-position: top;
  }

  #logo {
    position: absolute;
    top: 25%;
    left: 40%;
    width: 250px;
    height: 250px;
    border-radius: 25px;
    border: 4px solid #F9CA02;
    animation-duration: 3s;
  }
</style>
