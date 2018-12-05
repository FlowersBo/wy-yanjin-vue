/**
 * Created by Flowers博爵 on 2018/11/28.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './filter'
import Split from './components/Split/Split.vue'
import VueLazyload from 'vue-lazyload'
import loading from './assess/images/timg.gif'
Vue.use(VueLazyload, {
  loading,
})
//注册全局组件
Vue.component('Split',Split)
import './mock/mockServer'
new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})
