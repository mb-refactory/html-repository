<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
    <div class="container justify-content-center">
      <router-link to="/">Home</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center
}

nav a.router-link-exact-active {
  color: rgb(98, 175, 114);
  font-weight: bold;
  text-decoration: none;
}
a {
  font-size: 2em;
}

a:visited{
  color: #ffff;
}
</style>
