import VueVideoPlayer from '@videojs-player/vue'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)
app.use(VueVideoPlayer)
app.mount('#app')
