import moment from 'moment'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'

import { createComicFav } from '@/class/comicFav.class'
import { createPlayHistory } from '@/class/playHistory.class'
import { createPlayProgress } from '@/class/playProgress.class'
import { elementPlusInit } from '@/plugins/elementPlus'
import { createPreloadCdn } from '@/plugins/preloadCdn.class'
import { createTheme } from '@/theme/theme.class'
import { createVueInit } from '@/utils/vue/index'

const app = createApp(App)
const pinia = createPinia()
app.config.globalProperties.$moment = moment

createPreloadCdn()
createTheme()
createPlayProgress().getStore()
createPlayHistory().getStore()
createComicFav().getStore()

app.use(pinia).use(elementPlusInit).use(createVueInit)
app.mount('#app')

window.addEventListener('unhandledrejection', (e) => {
  e.preventDefault()
})
