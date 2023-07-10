<template>
  <b-container>
    <b-row class="mb-5">
      <b-col>
        <h4 class="mb-3">蒙古文字母表</h4>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-tabs content-class="mt-3">
          <b-tab title="西里尔蒙古文" active>
            <b-row>
              <b-col
                cols="6"
                lg="2"
                class="letter-item-wrapper"
                v-for="letterItem in newLetters"
                :key="letterItem.letter"
              >
                <div class="letter-wrapper">
                  <span class="new-letter">{{ letterItem.letter }}</span>
                </div>
                
                <div class="IPA-wrapper">
                  <div 
                    style="display: inline-block;"
                    v-for="IPAItem in letterItem.IPAs"
                    :key="IPAItem.IPA"
                  >
                    <div
                      :class="'IPA-btn ' + (playing === IPAItem.url ? 'playing' : '')"
                      @click="handlePlayAudio(IPAItem.url)"
                      v-if="IPAItem.IPA !== ''"
                    >
                      <span class="IPA-letter">{{ IPAItem.IPA }}</span>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="回鹘文">
            <b-row>
              <b-col
                cols="6"
                lg="2"
                class="letter-item-wrapper"
                v-for="letterItem in oldLetters"
                :key="letterItem.letter"
              >
                <div class="letter-wrapper">
                  <b-row>
                    <b-col cols="8" class="old-big-wrapper">
                      <div class="old-letter old-big">{{ letterItem.letter }}</div>
                    </b-col>
                    <b-col cols="4" class="old-small-wrapper">
                      <div class="old-letter old-small">{{ letterItem.start }}</div>
                      <div class="old-letter old-small">{{ letterItem.mid }}</div>
                      <div class="old-letter old-small">{{ letterItem.end }}</div>
                    </b-col>
                  </b-row>
                </div>
                
                <div class="IPA-wrapper">
                  <div 
                    style="display: inline-block;"
                    v-for="IPAItem in letterItem.IPAs"
                    :key="IPAItem.IPA"
                  >
                    <div
                      :class="'IPA-btn ' + (playing === IPAItem.url ? 'playing' : '')"
                      @click="handlePlayAudio(IPAItem.url)"
                      v-if="IPAItem.IPA !== ''"
                    >
                      <span class="IPA-letter">{{ IPAItem.IPA }}</span>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>
  
<script>
import { newLetters, oldLetters } from '@/data/alphabet'

export default {
  name: 'AlphabetPage',

  data() {
    return {
      playing: '',
      newLetters,
      oldLetters,
    }
  },


  methods: {
    handlePlayAudio(url) {
      const that = this

      const player = new Audio(url)
      player.play()
      that.playing = url

      player.onended = () => {
        that.playing = ''
      }
    },
  },
}
</script>
  
<style>
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
  background-color: #f5f5f5 !important;
  border-color: #dee2e6 #dee2e6 #f5f5f5 !important;
}

.letter-item-wrapper {
  padding: 20px 0;
}
.letter-wrapper {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px #ccc solid;
  border-radius: 4px;
}

.new-letter {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
}
.old-letter {
  font-family: 'ugmg';
  writing-mode: vertical-lr;
  text-orientation: sideways;
}
.old-big-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.old-big {
  font-size: 40px;
}
.old-small-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
}
.old-small {
  font-size: 26px;
  margin-bottom: 10px;
}

.IPA-wrapper {
  padding: 10px;
  text-align: center;
}
.IPA-btn {
  padding: 5px 10px;
  display: inline-block;
  text-align: center;
  color: #007bff;
  border: 1px #007bff solid;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 2px;
  margin-bottom: 5px;
}
.IPA-btn:hover {
  background-color: #007bff;
  color: #fff;
}
.IPA-letter {
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
.playing {
  background-color: #007bff;
  color: #fff;
}
</style>
  