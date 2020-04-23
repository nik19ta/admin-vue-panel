import Vue from 'vue';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Main from './components/Main'
import addDotmap from './components/add-dotmap'

Vue.use(VueRouter);
Vue.use(ElementUI)

const routes =[
  {path:'', component:Main},
  {path:'/adddotmap', component:addDotmap}
]
const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
