<template>
  <div class="testimonials-slider text-center" :height="sliderHeight">
    <v-carousel v-if="!isLoading" :show-arrows="true" hide-delimiters>
      <v-carousel-item
        v-for="(slide, i) in testimonials"
        :key="i"
        :src="slide.src"
      >
        <v-sheet :color="'transparent'" height="100%" tile>
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            color="transparent"
          >
            <div class="slide-content text-center">
              <span class="super-title">{{ slide.superTitle }}</span>
              <h2
                :class="{
                  'main-title main-title--testimonial': !isMobileView,
                  'main-title-mobile': isMobileView,
                }"
                color=""
              >
                {{ slide.title }}
              </h2>
              <p class="slide-description">{{ slide.description }}</p>
              <p class="slide-customer-name">{{ slide.customerName }}</p>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-btn class="btn btn--main btn-faq" :ripple="false" nuxt :to="path">{{
      btnLabel
    }}</v-btn>
  </div>
</template>

<script>
import { getTestimonials } from '~~/api/testimonials.js'
import mixins from '~/mixins'

export default {
  name: 'TestimonialsSlider',
  mixins: [mixins],
  data() {
    return {
      testimonials: [],
      path: '',
      btnLabel: '',
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
          height = 600
          break
        case 'xl':
          height = 600
          break
      }

      return height
    },
  },
  async created() {
    this.isLoading = true
    const testimonialsData = await getTestimonials()
    this.testimonials = testimonialsData.testimonials
    this.path = testimonialsData.path
    this.btnLabel = testimonialsData.btnLabel
    this.isLoading = false
  },
}
</script>

<style lang="scss">
.testimonials-slider {
  background-color: #eeeeee;

  .slide-content {
    max-width: 600px;
    width: 90%;
    margin-top: 0px;
  }

  .super-title {
    margin-bottom: 12px;
    color: $highlighted-color;
  }

  .main-title,
  .main-title-mobile {
    color: $title-color;
    margin-bottom: 30px;
  }

  .slide-description {
    font-size: 18px;
    font-weight: $body-font-weight;
    line-height: 32px;
    color: $body-color;
  }
  .slide-customer-name {
    font-size: $body-font-size;
    font-weight: $body-font-weight;
    line-height: $body-ling-height;
    color: $body-color;
    margin-bottom: 36px;
  }

  .btn-faq {
    position: relative;
    top: -100px;
  }

  .v-window__prev {
    left: 25%;
    background-color: transparent;

    .v-btn {
      width: 71px !important;
      height: 71px !important;
      border-radius: unset !important;
      background-color: transparent !important;

      &:before {
        content: '';
        width: 50px;
        height: 50px;
        opacity: 1 !important;
        transform: matrix(0.71, -0.71, 0.71, 0.71, 0, 0) !important;
        background: transparent 0% 0% no-repeat padding-box;
        border-left: 2px solid $btn-bg-color;
        border-top: 2px solid $btn-bg-color;
      }

      .v-btn__content {
        display: none !important;
      }
      .v-ripple__container {
        display: none !important;
      }
    }
  }

  .v-window__next {
    right: 25%;
    background-color: transparent;

    .v-btn {
      width: 71px !important;
      height: 71px !important;
      border-radius: unset !important;
      background-color: transparent !important;

      &:before {
        content: '';
        width: 50px;
        height: 50px;
        opacity: 1 !important;
        transform: matrix(0.71, -0.71, 0.71, 0.71, 0, 0) !important;
        background: transparent 0% 0% no-repeat padding-box;
        border-right: 2px solid $btn-bg-color;
        border-bottom: 2px solid $btn-bg-color;
      }

      .v-btn__content {
        display: none !important;
      }
      .v-ripple__container {
        display: none !important;
      }
    }
  }
}
</style>
