<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="warning" fixed="top">
      <b-navbar-brand href="/">Алтан Монгол</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="linkTo('funcs')">本站功能</b-nav-item>
          <b-nav-item @click="linkTo('more_tools')">更多工具</b-nav-item>
          <b-nav-item @click="linkTo('study_res')">学习资源</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div id="main">
      <router-view></router-view>
    </div>

    <div class="bg-dark text-light">
      <b-container class="p-4">
        <b-row class="mb-4">
          <b-col cols="6" xl="3" class="mb-4">
            作者：<br>
            <b-link class="text-warning" href="https://space.bilibili.com/13957052/">@济北周南</b-link>
          </b-col>

          <b-col cols="6" xl="3" class="mb-4">
            联系方式：<br>
            <b-link class="text-light" href="mailto:JoeNahm@yeah.net">JoeNahm@yeah.net</b-link>
          </b-col>

          <b-col cols="6" xl="3" class="mb-4">
            友情连接：<br>
            <b-link class="text-light" href="https://newstandshare.azurewebsites.net/">骑士外刊小站</b-link>
          </b-col>

          <b-col cols="6" xl="3" class="mb-4">
            打赏：<br>
            <b-link class="text-light" href="https://afdian.net/a/joenahm">爱发电</b-link>
          </b-col>
        </b-row>
        <b-row class="bottom-slogan">
          <div>ᠮᠥᠩᠬᠡ ᠲᠩᠷᠢ ᠶ᠋ᠢᠨ ᠬᠦᠴᠦᠲᠣᠷ</div>
        </b-row>
      </b-container>
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
    routes,
  }),
 
  methods: {
    linkTo(id) {
      if (location.hash.split('?')[0] === '#/') {
        const elm = document.getElementById(id)
        elm.scrollIntoView()
      } else {
        this.$router.push(`/?id=${id}`)
      }
    },
  },
}
</script>

<style>
#main {
  margin-top: 100px;
  min-height: 1000px;
}

.bottom-slogan {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  font-family: "Oyun Garbiqimel Tig";
  font-size: 20px;
  word-spacing: 10px;
  writing-mode: vertical-lr;
}
</style>
