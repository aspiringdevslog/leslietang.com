<template>
  <div id="app">
    <a href="/"><h1>LESLIE TANG</h1></a>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavigationBar from './components/NavigationBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    'nav-bar': NavigationBar,
    'app-footer': Footer
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
  padding: none;
  background-color: #333745;
  width: 80%;

}
</style>
