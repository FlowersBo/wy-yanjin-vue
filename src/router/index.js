/**
 * Created by Flowers博爵 on 2018/11/28.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=>import('../pages/Home/Home.vue')
const Entity=()=>import('../pages/Entity/Entity.vue')
const Sort=()=>import('../pages/Sort/Sort.vue')
const Cart=()=>import('../pages/Cart/Cart.vue')
const Person=()=>import('../pages/Person/Person.vue')
const MaskLayer=()=>import('../pages/MaskLayer/MaskLayer.vue')
const HomeShop=()=>import('../pages/Home/HomeShop/HomeShop.vue')
//声明使用vue插件
Vue.use(VueRouter)
export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/masklayer',
    },
    {
      path:'/masklayer',
      component:MaskLayer,
    },
    {
      path:'/home',
      component:Home,
      meta:{
        showFoot:true
      },
      children:[
        {
          path:`/home/homeshop/:index`,
          component:HomeShop,
          meta:{
            showFoot:true
          }
        },
      ]
    },
    {
      path:'/entity',
      component:Entity,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/sort',
      component:Sort,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/cart',
      component:Cart,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/person',
      component:Person,
    },
  ]
})
