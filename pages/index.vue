<template>
  <div>
    <main-slider></main-slider>
    <intro-content></intro-content>
    <testimonials-slider></testimonials-slider>
    <photo-gallery></photo-gallery>
  </div>
</template>

<script>
import IntroContent from '../components/IntroContent.vue'
export default {
  components: { IntroContent },
  layout: 'homePage',
  head() {
    // Set Meta Tags for this Page
  },
}
</script>
