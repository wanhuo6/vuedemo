<template>
  <div id="app">
    <NavBar v-if="$route.meta.show_header"/>
<!--    <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
import  NavBar from './components/NavBar'
export default {
  components:{
    NavBar
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
