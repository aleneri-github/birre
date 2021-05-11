<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <div id="nav">
      <header>
        <router-link to="/">Home</router-link> |
        <router-link to="/birre">Birre</router-link>
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
    height: 70px;
    width: 100%;
  }
}
</style>
