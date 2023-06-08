<template>
  <b-container>
    <b-row class="mb-5">
      <b-col cols="12" md="4" class="img-wrapper">
        <div
          class="bk-img"
          :style="{backgroundImage: `url(${alt})`}"
        >
        </div>
      </b-col>
      <b-col cols="12" md="8">
        <div class="text-wrapper">
          <b-row>
            <b-col cols="12" lg="7" class="text-col mb-2">
              <div class="zh">阿六敦蒙古语工具站</div>
            </b-col>
            <b-col cols="12" lg="4" class="text-col mb-2" style="text-orientation: sideways;">
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
            class="flex-column align-items-start"
            @click="jumpTo('/hdm2pic')"
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
                </div>

                <p class="mb-1">
                  便捷地生成传统蒙文的透明背景图片，可设置颜色和字体等。
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
          title="阿六敦背单词"
          :img-src="alt"
          img-alt="阿六敦背单词logo"
          img-top
          class="mb-3"
        >
          <b-card-text>
            一个极简的蒙古、突厥等语言的背单词小工具。
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
            多语释义且支持互相查询的蒙古语词典，同时有单词发音和例句。（建议使用电脑访问）
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

    <a id="study_res" class="anchor"></a>
    <h4 class="mb-3">学习资源</h4>
    <b-row class="mb-5">
      <b-col cols="12" sm="6" md="4" lg="3">
        <b-card
          title="传统蒙文字母"
          :img-src="ctmwzm"
          img-alt="传统蒙文字母封面"
          img-top
          class="mb-3"
        >
          <b-card-text>
            作者：<b-link href="https://space.bilibili.com/13957052/">@济北周南</b-link>
            <br>
            主要介绍传统蒙文字母的字头、字中、字尾的书写，以及各个字母的发音。
          </b-card-text>
          <b-button
            href="https://www.bilibili.com/video/BV1Z34y1r7jp/"
            variant="primary"
          >
            访问
          </b-button>
        </b-card>
      </b-col>

      <b-col cols="12" sm="6" md="4" lg="3">
        <b-card
          title="蒙古语基础词汇"
          :img-src="mgych"
          img-alt="蒙古语基础词汇封面"
          img-top
          class="mb-3"
        >
          <b-card-text>
            作者：<b-link href="https://space.bilibili.com/13957052/">@济北周南</b-link>
            <br>
            词汇来自北大版<b-link href="https://book.douban.com/subject/26986873/">《现代蒙古语教程》</b-link>第一册。
          </b-card-text>
          <b-button
            href="https://www.bilibili.com/video/BV1hU4y1Z7YS/"
            variant="primary"
          >
            访问
          </b-button>
        </b-card>
      </b-col>

      <b-col cols="12" sm="6" md="4" lg="3">
        <b-card
          title="蒙古语基础语法"
          :img-src="mgyyf"
          img-alt="蒙古语基础语法封面"
          img-top
          class="mb-3"
        >
          <b-card-text>
            作者：<b-link href="https://space.bilibili.com/355799586/">@莱依拉</b-link>
            <br>
            50词汇量拿捏蒙古语基础语法，用12节课讲解名词的格和动词的时。
          </b-card-text>
          <b-button
            href="https://www.bilibili.com/video/BV1DD4y1z7Zm/"
            variant="primary"
          >
            访问
          </b-button>
        </b-card>
      </b-col>

      <b-col cols="12" sm="6" md="4" lg="3">
        <b-card
          title="蒙古语语法精讲"
          :img-src="yfjj"
          img-alt="蒙古语语法精讲封面"
          img-top
          class="mb-3"
        >
          <b-card-text>
            作者：<b-link href="https://space.bilibili.com/76757105/">@竹城的梦</b-link>
            <br>
            深入、细致讲解蒙古语语法知识，快速搭建蒙古语语法知识体系。
          </b-card-text>
          <b-button
            href="https://www.bilibili.com/video/BV1cF411E7ex/"
            variant="primary"
          >
            访问
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import xxt from '@/assets/xxt.png'
import xxmgy from '@/assets/xxmgy.png'
import alt from '@/assets/alt.png'
import bolor from '@/assets/bolor.png'

import ctmwzm from '@/assets/ee6c08625374df308a76669d4895f21f06f5a7e0.jpg'
import mgych from '@/assets/a041bb4769e59dd4da8d624f8a3517280f550201.jpg'
import mgyyf from '@/assets/f378d40d0e2794004d274727537e009b9ff15dd5.jpg'
import yfjj from '@/assets/f54290ad15793443ac7623701e1550202c01d51c.jpg'

export default {
  name: 'IndexPage',
  data() {
    return {
      xxmgy,
      xxt,
      alt,
      bolor,
      ctmwzm,
      mgych,
      mgyyf,
      yfjj,
    }
  },

  mounted() {
    const spRet = location.hash.split('?')
    if (spRet.length > 1) {
      const id = spRet.slice(-1)[0].split('=')[1]
      const elm = document.getElementById(id)
      elm.scrollIntoView()
    }
  },

  methods: {
    jumpTo(url) {
      this.$router.push(url)
    },
  },
}
</script>

<style>
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
.card-text{
  min-height: 100px !important;
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

</style>
