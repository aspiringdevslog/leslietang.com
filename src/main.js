import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.config.productionTip = false

Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});

// main app
// new Vue({
//   el: '#app',
//   methods: {
//    handleScroll: function(evt, el) {
//     if (window.scrollY > 50) {
//       el.setAttribute("style", "opacity: 1; transform: translate3d(0, -10px, 0)")
//     }
//     return window.scrollY > 100;
//     }
//   }
// });

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
