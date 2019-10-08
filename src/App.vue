<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <router-link to="/indexhtml">indexhtml</router-link>
    <br>
    <router-link to="/page1html">page1html</router-link>
    <br>
    <router-link to="/page2html">page2html</router-link>
    <br>
    <br>
    <br>

    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted: function () {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
