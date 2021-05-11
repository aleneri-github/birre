<template>
  <div class="home">
    <!-- <Title value="Home" /> -->
    <img id="logo" src="/birrificio-del-forte-logo.png" alt="logo">
  </div>
</template>

<script>
// import Title from "../components/Title";
// export default {
//   name: 'Home',
//   components: {
//     Title
//   }
// }
</script>

<style>
  .home {
    position: relative;
    height: calc(100vh - 80px);
    background-image: url('https://st.depositphotos.com/2471189/4132/i/950/depositphotos_41321775-stock-photo-beer-texture.jpg');
    background-size: cover;
    background-position: top;
  }

  #logo {
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;


  }

  /* .background {
    height: 50%;
    background-image: url('/birre.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  } */


</style>
