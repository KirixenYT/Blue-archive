import './assets/index.css'
import '@arco-design/web-vue/dist/arco.css'

import 'pixi-spine' // Do this once at the very start of your code. This registers the loader!

import { createApp } from 'vue'
import { Modal } from '@arco-design/web-vue'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register'

const app = createApp(App)
app.use(ArcoVue)
app.use(ArcoVueIcon)

app.mount('#app')

if ('serviceWorker' in navigator) {
  const updateSW = registerSW({
    onNeedRefresh() {
      Modal.open({
        title: 'Notice',
        content: 'Sensei, the site has been updated, refresh to access the latest content!',
        onOk: () => {
          updateSW(true)
        }
      })
    }
  })
}

window.l2d_complete = false

setInterval(() => {
  document.querySelectorAll('a[href]:not(.tag)').forEach((link) => {
    link.classList.add('tag')
    link.addEventListener('click', async (e) => {
      const url = link.getAttribute('href')
      e.preventDefault()
      document.querySelector('#curtain').style.display = 'block'
      setTimeout(() => {
        let a = document.createElement('a')
        a.href = url
        a.target = '_blank'
        a.click()
      }, 900)
      setTimeout(() => (document.querySelector('#curtain').style.display = ''), 3000)
    })
  })
}, 1000)

import * as PIXI from 'pixi.js'
import { sound } from '@pixi/sound'

import hina_swimsuit from '/l2d/hina_swimsuit/CH0063_home.skel?url'
import hina_bgm from '/l2d/hina_swimsuit/Theme_21.mp3'
import aris from '/l2d/aris/Aris_home.skel?url'
import aris_bgm from '/l2d/aris/Someday_-sometime.mp3'
import mika from '/l2d/mika/CH0069_home.skel?url'
import mika_bgm from '/l2d/mika/Daily-Routine-247.mp3'

const students = [hina_swimsuit, aris, mika]
const l2dBGM = [hina_bgm, aris_bgm, mika_bgm]

export let studentsL2D = []
export let bgmName = []

;(async function () {
  for (let i of students) {
    studentsL2D.push(await PIXI.Assets.load(i))
  }
  for (let i of l2dBGM) {
    sound.add(i.split('/').pop().split('.')[0], {
      url: i,
      loop: true
    })
    bgmName.push(i.split('/').pop().split('.')[0])
  }

  window.l2d_complete = true
})()
