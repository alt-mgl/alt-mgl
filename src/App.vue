<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="warning" fixed="top">
      <b-navbar-brand href="#">Алтан Монгол</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/#funcs">本站功能</b-nav-item>
          <b-nav-item href="/#more_tools">更多工具</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    
    <b-container id="main">
      <b-row class="mb-5">
        <b-col cols="12" md="4" class="img-wrapper">
          <div
            class="bk-img"
            :style="'background-image: url('+alt+');'"
          >
          </div>
        </b-col>
        <b-col cols="12" md="8">
          <div class="text-wrapper">
            <b-row>
              <b-col cols="12" lg="7" class="text-col mb-2">
                <div class="zh">阿六敦蒙古语工具站</div>
              </b-col>
              <b-col cols="12" lg="4" class="text-col mb-2">
                <div class="mn">ᠠᠯᠲᠠᠨ</div>
                <div class="mn">ᠮᠣᠩᠭᠣᠯ</div>
                <div class="mn">ᠬᠡᠷᠡᠭᠰᠡᠯ</div>
                <div class="mn">ᠰᠠᠶᠢᠲᠤ</div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>

      <a id="funcs" class="anchor"></a>
      <h4 class="mb-3">本站功能</h4>
      <b-row class="mb-5">
        <b-col>
          <b-list-group>
            <b-list-group-item
              href="#"
              class="flex-column align-items-start"
              disabled
            >
              <b-row>
                <b-col cols="12" md="1">
                  <div class="bg-icon">
                    <b-icon-card-image></b-icon-card-image>
                  </div>
                </b-col>
                <b-col cols="12" md="11">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">传统蒙文图片生成</h5>
                    <small>开发中...</small>
                  </div>

                  <p class="mb-1">
                    便捷地生成传统蒙文的透明背景图片，可设置颜色和字体。
                  </p>
                </b-col>
              </b-row>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>

      <a id="more_tools" class="anchor"></a>
      <h4 class="mb-3">更多工具</h4>
      <b-row class="mb-5">
        <b-col cols="12" sm="6" md="4" lg="3">
          <b-card
            title="学习蒙古语"
            :img-src="xxmgy"
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
              访问
            </b-button>
          </b-card>
        </b-col>

        <b-col cols="12" sm="6" md="4" lg="3">
          <b-card
            title="蒙语学习通"
            :img-src="xxt"
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
              访问
            </b-button>
          </b-card>
        </b-col>

        <b-col cols="12" sm="6" md="4" lg="3">
          <b-card
            title="蒙古语-背单词"
            :img-src="alt"
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
              访问
            </b-button>
          </b-card>
        </b-col>

        <b-col cols="12" sm="6" md="4" lg="3">
          <b-card
            title="Bolor词典"
            :img-src="bolor"
            img-alt="Bolor词典logo"
            img-top
            class="mb-3"
          >
            <b-card-text>
              多语释义且支持互相查询的蒙古语词典，同时有单词发音和例句。
            </b-card-text>
            <b-button
              href="https://bolor-toli.com/"
              variant="primary"
            >
              访问
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import xxt from '@/assets/xxt.png'
import xxmgy from '@/assets/xxmgy.png'
import alt from '@/assets/alt.png'
import bolor from '@/assets/bolor.png'

export default {
  name: 'App',
  data() {
    return {
      xxmgy,
      xxt,
      alt,
      bolor,
    }
  },
}
</script>

<style>
#main {
  margin-top: 100px;
}

.anchor {
  position: relative;
  top: -100px;
}

.img-wrapper {
  display: flex;
  justify-content: flex-end;
}
.bk-img {
  width: 260px;
  height: 260px;
  background-position: center center;
  background-size: 100%;
}

.text-wrapper {
  margin-top: 90px;
  height: 260px;
}
.text-col {
  text-align: center;
}
.zh {
  font-size: 34px;
}
.mn {
  display: inline-block;
  writing-mode: vertical-lr;
  font-size: 30px;
  vertical-align: top;
}
@media screen and (max-width: 992px) {
  .zh {
    font-size: 28px;
  }
  .mn {
    font-size: 30px;
  }
  .bk-img {
    width: 180px;
    height: 180px;
  }
  .text-wrapper {
    height: 180px;
    margin-top: 40px;
  }
}
@media screen and (max-width: 768px) {
  .zh {
    font-size: 24px;
  }
  .mn {
    font-size: 24px;
  }
  .img-wrapper {
    justify-content: center;
  }
  .text-wrapper {
    height: auto;
  }
}

.bg-icon {
  font-size: 40px;
  text-align: center;
}

.card-text{
  min-height: 80px !important;
}
</style>
