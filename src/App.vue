<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="warning" fixed="top">
      <b-navbar-brand href="/">Алтан Монгол</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/#funcs">本站功能</b-nav-item>
          <b-nav-item href="/#more_tools">更多工具</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import VueRouter from 'vue-router';
import Index from '@/pages/Index.vue'
import HDM2Pic from '@/pages/HDM2Pic.vue'


const routes = [
  { path: '/', component: Index },
  { path: '/hdm2pic', component: HDM2Pic },
]


export default {
  name: 'App',
  router: new VueRouter({
    mode: 'history',
    routes,
  }),
  data() {
    return {
      
    }
  },
}
</script>

<style>
#main {
  margin-top: 100px;
}
</style>
