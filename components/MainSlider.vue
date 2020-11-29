<template>
  <v-carousel
    v-if="!isLoading"
    class="main-slider"
    :height="sliderHeight"
    :show-arrows="false"
    hide-delimiter-background
    delimiter-icon="mdi-minus"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
      <v-sheet :color="'transparent'" height="100%" tile>
        <v-row
          class="fill-height"
          align="center"
          justify="center"
          color="transparent"
        >
          <div class="slide-content text-center">
            <span class="super-title super-title--with-shadow">{{
              slide.superTitle
            }}</span>
            <h2
              :class="{
                'main-title': !isMobileView,
                'main-title-mobile': isMobileView,
              }"
            >
              {{ slide.title }}
            </h2>
            <v-btn
              class="btn btn--main"
              :ripple="false"
              nuxt
              :to="slide.path"
              >{{ slide.btnLabel }}</v-btn
            >
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { getSlides } from '~~/api/slider.js'
import mixins from '~/mixins'

export default {
  name: 'MainSlider',
  mixins: [mixins],
  data() {
    return {
      slides: [],
    }
  },
  computed: {
    sliderHeight() {
      let height = 900

      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          height = 500
          break
        case 'sm':
          height = 500
          break
        case 'md':
          height = 600
          break
        case 'lg':
          height = 800
          break
        case 'xl':
          height = 900
          break
      }

      return height
    },
  },
  async created() {
    this.isLoading = true
    this.slides = await getSlides()
    this.isLoading = false
  },
}
</script>

<style lang="scss">
.main-slider {
  .slide-content {
    max-width: 700px;
    width: 90%;
    margin-top: 40px;
  }

  .super-title {
    margin-bottom: 12px;
  }

  .main-title,
  .main-title-mobile {
    margin-bottom: 30px;
  }

  .v-carousel__controls {
    .v-item-group {
      line-height: 5px;
      margin-bottom: 25px;
    }
  }

  .v-carousel__controls__item {
    width: 50px;
    height: 5px;
    &:before {
      display: none !important;
    }

    .v-btn__content {
      &:before {
        content: '';
        display: block;
        width: 50px;
        height: 5px;
        background-color: #fff;
      }
      .v-icon {
        display: none !important;
      }
    }
  }

  .v-item--active {
    .v-btn__content {
      &:before {
        background-color: $highlighted-color;
      }
    }
  }
}
</style>
