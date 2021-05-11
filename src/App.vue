<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <div id="nav">
      <header>
        <router-link to="/">Home</router-link> |
        <router-link to="/birre">Birre</router-link> |
        <router-link to="/dettaglio/:id">Dettaglio Birra</router-link>
      </header>
    </div>

    <!-- sostituisce se stesso con il componente associato all'url su cui si trova l'utente -->
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Bebas Neue', cursive;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1D1D1B;
}

#nav {
  padding: 15px;
  font-size: 40px;
  background-color: #F5CA01;

  a {
    font-weight: bold;
    color: #A07B3A;

    &.router-link-exact-active {
      color: #3C2C24;
    }
  }

  header {
    height: 50px;
    width: 100%;
  }
}
</style>
