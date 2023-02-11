<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
      <b-navbar-brand href="#">Алтан Монгол</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div id="main">
      <div class="wrapper">
        <b-col cols="6" lg="3" xl="2" id="banner">
          <div class="banner-card">
            <div class="banner-mgl">
            ᠠᠯᠲᠠᠨ ᠮᠣᠩᠭᠣᠯ ᠬᠡᠷᠡᠭᠰᠡᠯ ᠰᠠᠶᠢᠲᠤ
          </div>
          <div class="banner-zh">
            阿六敦蒙古语工具站
          </div>
          </div>
        </b-col>

        <b-col cols="6" lg="3" xl="2">
          <b-card
            title="学习蒙古语"
            img-src="https://mongol-surah.github.io/favicon.ico"
            img-alt="学习蒙古语logo"
            img-top
            class="mb-3"
          >
            <b-card-text>
              蒙古语学习资源网站，包含书籍、文章和其他学习资源。
            </b-card-text>
            <b-button
              href="https://mongol-surah.github.io/"
              variant="primary"
            >
              打开
            </b-button>
          </b-card>
        </b-col>

        <b-col cols="6" lg="3" xl="2">
          <b-card
            title="蒙语学习通"
            img-src="http://www.studymongolian.cn/favicon.png"
            img-alt="蒙语学习通logo"
            img-top
            class="mb-3"
          >
            <b-card-text>
              集成了大量蒙古文数字化资源和工具，拥有多项特色功能的APP。
            </b-card-text>
            <b-button
              href="http://www.studymongolian.cn/"
              variant="primary"
            >
              打开
            </b-button>
          </b-card>
        </b-col>

        <b-col cols="6" lg="3" xl="2">
          <b-card
            title="蒙古语-背单词"
            img-src="https://joenahm.gitee.io/favicon.ico"
            img-alt="蒙古语-背单词logo"
            img-top
            class="mb-3"
          >
            <b-card-text>
              一个极简的蒙古语背单词小工具。
            </b-card-text>
            <b-button
              href="https://joenahm.gitee.io/mgl-memo/"
              variant="primary"
            >
              打开
            </b-button>
          </b-card>
        </b-col>

        <b-col cols="6" lg="3" xl="2">
          <b-card
            title="传统蒙文生成"
            img-src="https://joenahm.gitee.io/favicon.ico"
            img-alt="传统蒙文生成logo"
            img-top
            class="mb-3"
          >
            <b-card-text>
              生成传统蒙文图片的工具。
            </b-card-text>
            <b-button
              href="https://mongol-surah.github.io/"
              variant="primary"
              disabled
            >
              开发中
            </b-button>
          </b-card>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  height: 100%;
}
#main {
  display: flex;
  height: 100%;
  align-items: center;
}
.wrapper {
  display: flex;
}

#banner {
  width: 100%;
  font-size: 30px;
  writing-mode: vertical-lr;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.banner-card {
  width: 60%;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.banner-mgl {
  word-spacing: 20px;
}
.banner-zh {
  letter-spacing: 10px;
}

.card-text{
  min-height: 80px !important;
}
</style>
