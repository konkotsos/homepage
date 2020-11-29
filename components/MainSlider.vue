<template>
  <v-carousel :height="sliderHeight" :show-arrows="false">
    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
      <v-sheet :color="'transparent'" height="100%" tile>
        <v-row
          class="fill-height"
          align="center"
          justify="center"
          color="transparent"
        >
          <div class="text-center">
            <span class="supper-title">{{ slide.superTitle }}12</span>
            <h2 class="app-heading-1">{{ slide.title }}</h2>
            <v-btn class="btn btn--main" nuxt :to="slide.path">{{
              slide.btnLabel
            }}</v-btn>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'MainSlider',
  data() {
    return {
      slides: [
        {
          src: '/img/mainslider/slide1.png',
          superTitle: 'Design and order your new kitchen online today',
          title: 'Bespoke & made to measure handmade kitchen design',
          path: '#slide1',
          btnLabel: 'Order Now',
        },
        {
          src: '/img/mainslider/slide1.png',
        },
      ],
    }
  },
  computed: {
    sliderHeight() {
      let height = 900
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          height = 400
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
}
</script>

<style></style>
