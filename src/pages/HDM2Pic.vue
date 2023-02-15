<template>
  <b-container>
    <b-row class="mb-5">
      <b-col>
        <h4 class="mb-3">传统蒙文图片生成</h4>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" md="6" class="mb-3">
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="请用虚拟键盘或直接输入传统蒙文"
          rows="3"
          @input="handleTextChange"
          @click="handleCursorSet"
        ></b-form-textarea>
      </b-col>
      <b-col cols="12" md="6" class="mb-2">
        <b-row class="mb-4 mt-2">
          <b-col cols="4">
            <b-input-group prepend="字体" size="sm">
              <b-form-select v-model="fontFamily" :options="fonts"></b-form-select>
            </b-input-group>
          </b-col>
          <b-col cols="4">
            <b-input-group prepend="字号" size="sm">
              <b-form-select v-model="fontSize" :options="sizes"></b-form-select>
            </b-input-group>
          </b-col>
          <b-col cols="4">
            <b-button
              variant="primary"
              size="sm"
              block
              :disabled="text === ''"
              @click="handleExport"
            >
              <b-icon-box-arrow-right></b-icon-box-arrow-right>
              &nbsp;
              <span>导出</span>
            </b-button>
          </b-col>
        </b-row>
        <b-row class="mb-2 mt-2">
          <b-col cols="4">
            <b-input-group prepend="颜色" size="sm">
             <div class="color-picker" @click="handleColorClick($event, 'font')">
              <div
                class="color-card"
                :style="{
                  backgroundColor: fontColor,
              }"></div>
             </div>
            </b-input-group>
          </b-col>
          <b-col cols="4">
            <b-input-group prepend="背景" size="sm">
              <div class="color-picker"  @click="handleColorClick($event, 'bk')">
                <div
                  class="color-card"
                  :style="{
                    backgroundImage: bkColor === '' ? `url(${bk})` : '',
                    backgroundColor: bkColor,
                }"></div>
              </div>
            </b-input-group>
          </b-col>
          <b-col cols="4">
            <b-input-group prepend="行距" size="sm">
              <b-form-input type="number" v-model="lineSpace"></b-form-input>
            </b-input-group>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <div class="collapse-btn" @click="handleToggleKeyboard">
      <b-icon-caret-up-fill v-if="keyboardStatus"></b-icon-caret-up-fill>
      <b-icon-keyboard v-else></b-icon-keyboard>
    </div>
    <div class="keyboard mb-4" v-if="keyboardStatus">
      <b-button
        variant="outline-danger"
        class="key"
        style="padding-top: 10px !important"
        @click="handleKeyClick('del')"
      >
        <span class="key-text">
          <b-icon-backspace></b-icon-backspace>
        </span>
      </b-button>

      <b-button
        variant="primary"
        class="key"
        v-for="k in vowel"
        :key="k"
        @click="handleKeyClick(k)"
      >
        <span class="key-text">{{ k }}</span>
      </b-button>

      <b-button
        variant="success"
        class="key"
        v-for="k in cons1"
        :key="k"
        @click="handleKeyClick(k)"
      >
        <span class="key-text">{{ k }}</span>
      </b-button>

      <b-button
        variant="secondary"
        class="key"
        v-for="k in cons2"
        :key="k"
        @click="handleKeyClick(k)"
      >
        <span class="key-text">{{ k }}</span>
      </b-button>

      <b-button
        variant="outline-info"
        class="key"
        v-for="k in quick"
        :key="k"
        @click="handleKeyClick(k)"
      >
        <span class="key-text">{{ k }}</span>
      </b-button>
    </div>    

    <b-row class="mb-5">
      <b-col class="cvs-wrapper">
        <canvas id="canvas" :style="{backgroundImage: `url(${bk})`}"></canvas>
      </b-col>
    </b-row>

    <div
      id="cmpt"
      v-bind:style="{
        fontSize: fontSize+'px',
        fontFamily,
      }"
    >
      <p
        v-for="line, lIdx in text.split('\n')"
        :key="lIdx"
      >
        {{ line }}
      </p>
    </div>

    <b-modal
      ref="save-modal"
      title="导出"
      ok-title="确定"
      cancel-title="取消"
      @ok="handleExportOk"
    >
      <b-input-group
        prepend="文件名"
        append=".png"
      >
        <b-form-input v-model="filename"></b-form-input>
      </b-input-group>
    </b-modal>

    <b-modal
      ref="color-modal"
      title="选取颜色"
      ok-title="确定"
      cancel-title="取消"
      @ok="handleColorOk"
    >
      <b-row>
        <b-col cols="12" md="2" class="mb-4">
          <label for="current-color">当前：</label>  
          <div
            id="current-color"
            :style="{
              backgroundImage: currentColor === '' ? `url(${bk})` : '',
              backgroundColor: currentColor,
            }"
          ></div>
        </b-col>

        <b-col cols="12" md="4" class="mb-4">
          <label for="current-color">预设：</label>
          <div class="color-wrapper">
            <div
              class="color-block"
              :style="{
                backgroundColor: c,
              }"
              v-for="c in colors"
              :key="c"
              @click="setCurrentColor(c)"
            ></div>
            <div
              class="color-block"
              :style="{
                backgroundImage: `url(${bk})`,
              }"
              @click="setCurrentColor('')"
              v-if="colorType === 'bk'"
            ></div>
          </div>
        </b-col>

        <b-col cols="12" md="6" class="mb-4">
          <label for="current-color">自定义：</label>
          <div>
            <b-form-input
              type="range"
              class="mb-4"
              min="0"
              max="255"
              v-model="R"
            ></b-form-input>
            <b-form-input
              type="range"
              class="mb-4"
              min="0"
              max="255"
              v-model="G"
            ></b-form-input>
            <b-form-input
              type="range"
              class="mb-4"
              min="0"
              max="255"
              v-model="B"
            ></b-form-input>
          </div>
        </b-col>
      </b-row>
    </b-modal>
  </b-container>
</template>

<script>
import { saveAs } from 'file-saver'
import bk from '@/assets/tran.jpg'

export default {
  name: 'HDM2PicPage',

  data() {
    return {
      // 字体选项
      fonts: [
        { value: 'Onon Sonin Sans', text: '斡仑报体' },
        { value: 'Oyun Qagan Tig', text: '奥云白体' },
        { value: 'Oyun Garbiqimel Tig', text: '奥云手写体'},
      ],
      // 字号选项
      sizes: [24, 28, 32, 36, 40, 48, 56, 64 ,72, 144],
      // 当前颜色
      currentColor: '',
      // 设置颜色类型
      colorType: '',
      // 自定义调整RGB值
      R: 0,
      G: 0,
      B: 0,
      // 预设颜色
      colors: [
        '#ff0000',
        '#ffcccc',
        '#ffcc00',
        '#ffff00',
        '#00ff00',
        '#0000ff',
        '#00ffff',
        '#5500ff',
        '#000000',
        '#ffffff'
      ],

      bk, // 透明背景
      text: '',
      cIdx: 0, // 光标位置
      ctx: null,
      canvas: null,
      width: 0,
      height: 0,
      fontSize: 40,
      fontFamily: 'Onon Sonin Sans',
      fontColor: '#000000',
      bkColor: '',
      lineSpace: 10,
      filename: '',

      keyboardStatus: false,
      quick: [
        '᠎ᠠ',
        'ᠤᠤ',
        ' ᠤ',
        ' ᠤᠨ',
        ' ᠶ᠋ᠢᠨ',
        ' ᠢ',
        ' ᠶ᠋ᠢ',
      ],
      vowel: [
        'ᠠ',
        'ᠡ',
        'ᠢ',
        'ᠣ',
        'ᠦ',
        'ᠧ',
      ],
      cons1:[
        'ᠪ',
        'ᠫ',
        'ᠮ',
        'ᠹ',
        'ᠳ',
        'ᠲ',
        'ᠨ',
        'ᠯ',
        'ᠭ',
        'ᠺ',
        'ᠬ',
        'ᠩ',
        'ᠵ',
        'ᠴ',
        'ᠱ',
        'ᠰ',
        'ᠷ',
        'ᠶ',
        'ᠸ',
      ],
      cons2:[
        'ᠽ',
        'ᠼ',
        'ᠾ',
        'ᡀ',
        'ᠿ',
        'ᡁ',
        'ᡂ',
      ]
    }
  },

  watch: {
    fontFamily() {
      this.drawText(this.text)
    },
    fontSize() {
      this.drawText(this.text)
    },
    lineSpace() {
      this.drawText(this.text)
    },
    fontColor() {
      this.drawText(this.text)
    },
    bkColor() {
      this.drawText(this.text)
    },
    R() {
      this.setCurrentColor()
    },
    G() {
      this.setCurrentColor()
    },
    B() {
      this.setCurrentColor()
    },
  },
  
  created() {
    document.addEventListener('keyup', this.handleCursorSet)
  },
  mounted() {
    this.initCanvas()
  },
  
  methods: {
    adaptDPR() {
      const dpr = window.devicePixelRatio > 1 ? window.devicePixelRatio : 2
      const { width, height } = this.canvas

      this.canvas.width = Math.round(width * dpr)
      this.canvas.height = Math.round(height * dpr)
      this.canvas.style.width = width + 'px'
      this.canvas.style.height = height + 'px'
      this.ctx.scale(dpr, dpr)

      this.width = this.canvas.width
      this.height = this.canvas.height
    },
    rotate() {
      this.ctx.rotate(Math.PI / 2)
    },
    initCanvas(w, h) {
      const canvas = document.getElementById('canvas')
      canvas.width = w
      canvas.height = h

      const ctx = canvas.getContext('2d')

      this.canvas = canvas
      this.ctx = ctx

      this.adaptDPR()
      this.rotate()

      return {
        canvas,
        ctx,
      }
    },
    handleTextChange(text) {
      this.drawText(text)
    },
    drawText(t) {
      const that = this
      const spRet = t.split('\n')

      setTimeout(() => {
        const cvsHeight= document.querySelector('#cmpt').offsetWidth
        const { fontSize, fontFamily, fontColor, bkColor, lineSpace } = that
        
        const ls = parseInt(lineSpace)
        const w = spRet.length * (fontSize + ls) + ls
        const h = cvsHeight + 20
        const { ctx} = that.initCanvas(w, h)

        if (bkColor !== '') {
          ctx.fillStyle = bkColor
          ctx.fillRect(0, 0, h, -w)
        }

        ctx.font = `${fontSize}px "${fontFamily}"`
        ctx.fillStyle = fontColor
        ctx.textBaseline = "top"

        spRet.forEach((line, idx) => {
          ctx.fillText(line, 10, - ((fontSize + ls) * (idx + 1)))
        })
      }, 100)
    },
    handleKeyClick(key) {
      if (key !== 'del') {
        this.text = this.text.slice(0, this.cIdx) + key + this.text.slice(this.cIdx)
        this.cIdx += 1
      } else {
        this.text = this.text.slice(0, this.cIdx - 1) + this.text.slice(this.cIdx)
        
        if (this.cIdx > 0) {
          this.cIdx -= 1
        }
      }

      this.drawText(this.text)
    },
    handleToggleKeyboard() {
      this.keyboardStatus = !this.keyboardStatus
    },
    handleColorClick(e, type) {
      e.preventDefault()
      
      this.colorType = type
      if (type === 'font' && this.currentColor === '') {
        this.currentColor = '#000000'
      }

      this.$refs['color-modal'].show()
    },
    setCurrentColor(v=null) {
      if (v !== null) {
        this.currentColor = v
        if (v !== '') {
          this.R = parseInt(v.slice(1, 3), 16).toString(10)
          this.G = parseInt(v.slice(3, 5), 16).toString(10)
          this.B = parseInt(v.slice(5, 7), 16).toString(10)
        }
      } else {
        const { R, G, B } = this
        const newR = parseInt(R).toString(16)
        const newG = parseInt(G).toString(16)
        const newB = parseInt(B).toString(16)
        this.currentColor = `#${newR.padStart(2,'0')}${newG.padStart(2,'0')}${newB.padStart(2,'0')}`
      }
    },
    handleColorOk() {
      const that = this
      switch (that.colorType) {
      case 'font':
        that.fontColor = this.currentColor
        break
      case 'bk':
        that.bkColor = this.currentColor
        break
      }
    },
    handleCursorSet(e) {
      this.cIdx = e.target.selectionStart
    },
    savePNG(filename) {
      const { canvas } = this
      
      canvas.toBlob((blob) => {
        saveAs(blob, `${filename}.png`)
      })
    },
    handleExport() {
      this.filename = Date.now()
      this.$refs['save-modal'].show()
    },
    handleExportOk() {
      this.savePNG(this.filename)
    },
  },
}
</script>

<style>
#textarea {
  font-size: 20px;
}

.collapse-btn {
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
  color: #fff;
  background-color: #6c757d;
  border: 1px 6c757d solid;
  border-radius: 4px;
}

.key {
  display: inline-block;
  text-orientation: sideways;
  min-width: 50px;
  margin: 0 5px;
  margin-bottom: 5px;
  padding-top: 15px !important;

}
.key-text {
  writing-mode: vertical-lr;
  vertical-align: top;
}

.cvs-wrapper {
  width: 100%;
  overflow-x: auto;
}

#canvas {
  border-radius: 4px;
}

#cmpt {
  position: fixed;
  display: inline-block;
  opacity: 0;
  z-index: -9;
}

.color-picker {
  width: 1%;
  flex: 1 1 auto;
  background-color: #fff;
  border: 1px #ced4da solid;
  border-radius: 0 4px 4px 0;
}
.color-card {
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  margin: 5px;
  border: 1px #555 solid;
}

#current-color {
  height: 50px;
  border: 1px #555 solid;
}

.color-block {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 1px;
  border: 1px #555 solid;
}
</style>
