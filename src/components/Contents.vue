<template>
  <section class="py-20 max-w-[1210px] mx-auto md:px-[72px]">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">{{ features.title }}</h2>
        <p class="text-gray-600">
          {{ features.subtitle.line1 }}<br />
          <span class="hidden sm:block">{{ features.subtitle.line2 }}</span>
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="feature in features.features" :key="feature.title" class="text-center p-6">
          <img :src="feature.icon" :alt="feature.title" class="w-12 h-12 mx-auto mb-4" />
          <h3 class="text-xl font-bold mb-2">
            {{ feature.title }}
            <span v-if="feature.subtitle" class="block">{{ feature.subtitle }}</span>
          </h3>
          <p class="text-gray-600 mx-auto text-center max-w-fit sm:w-full">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <div class="w-full">
    <div class="max-w-[1210px] mx-auto px-10 sm:px-5 md:px-5 lg:px-5 2xl:px-0">
      <video
        ref="videoPlayer"
        class="video-js vjs-big-play-centered w-full aspect-video rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        controls
        preload="auto"
        :poster="posterUrl"
        data-setup='{
        "fluid": true,
        "controls": true,
        "playbackRates": [0.5, 1, 1.5, 2],
        "userActive": true
      }'
      >
        <source :src="videoUrl" :type="videoType" />
      </video>
    </div>
  </div>

  <FasterWayToOrganize />
  <LightningFast />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { featureContent } from '@/static/data.ts'
import videoUrl from '../assets/medias/meeting.mp4'
import posterUrl from '../assets/medias/poster.jpg'
import 'video.js/dist/video-js.css'
import FasterWayToOrganize from './FasterWayToOrganize.vue'
import LightningFast from './LightningFast.vue'

export default defineComponent({
  name: 'Contents',
  components: {
    FasterWayToOrganize,
    LightningFast
  },
  data() {
    return {
      features: featureContent,
      videoUrl,
      videoType: 'video/mp4',
      posterUrl
    }
  }
})
</script>

<style>
.video-js .vjs-control-bar {
  display: none;
}

.video-js.vjs-playing.vjs-user-inactive .vjs-control-bar {
  visibility: hidden;
  opacity: 0;
  transition-delay: 0.3s;
}

.video-js.vjs-playing.vjs-user-active .vjs-control-bar {
  visibility: visible;
  opacity: 1;
}

.video-js .vjs-big-play-button {
  width: 80px;
  height: 80px;
  background-color: #2563eb;
  border-radius: 50%;
  border: none;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
}

.video-js .vjs-big-play-button .vjs-icon-placeholder:before {
  font-size: 40px;
  line-height: 65px;
  position: absolute;
  left: 55%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.video-js:hover .vjs-big-play-button {
  background-color: #1d4ed8;
  transform: translate(-50%, -50%) scale(1.1);
}

.vjs-icon-placeholder {
  display: flex !important;
  align-items: center;
  justify-content: center;
}

.vjs-poster {
  background-size: cover;
  background-color: #ffffff;
}

.video-js {
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 8px 30px rgb(0 0 0 / 0.12);
}

.video-js .vjs-tech {
  border-radius: 2rem;
}

/* Fix play button icon */
.vjs-icon-play:before,
.video-js .vjs-big-play-button .vjs-icon-placeholder:before,
.video-js .vjs-play-control .vjs-icon-placeholder:before {
  content: '\25B6' !important; /* Unicode play triangle */
}

/* Optional: Adjust play button icon position */
.video-js .vjs-big-play-button .vjs-icon-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}
</style>
