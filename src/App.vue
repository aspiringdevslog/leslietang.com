<template>
  <div id="app">
    <a href="/"><h1>LESLIE TANG</h1></a>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>



import HelloWorld from './components/HelloWorld.vue'
import NavigationBar from './components/NavigationBar.vue'



export default {
  name: 'app',
  components: {
    'nav-bar': NavigationBar
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d4cfd6;
  margin: 0 auto;
  background-color: #333745;
  max-width: 80%;

}
</style>
