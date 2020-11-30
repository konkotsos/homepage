<template>
  <div v-if="!isLoading" class="home-page-wrapper">
    <main-slider :slides="slides"></main-slider>
    <intro-content :intro-content="introContent"></intro-content>
    <testimonials-slider
      :testimonials="testimonials"
      :path="testimonialsPath"
      :btn-label="testimonialsBtnLabel"
    ></testimonials-slider>
    <photo-gallery
      :items="photoGalleryItems"
      :title="photoGalleryTitle"
      :btn-label="photoGalleryBtnLabel"
      :btn-path="photoGalleryBtnPath"
    ></photo-gallery>
  </div>
</template>

<script>
import { getSlides } from '~~/api/slider.js'
import { getIntroContent } from '~~/api/introContent.js'
import { getTestimonials } from '~~/api/testimonials.js'
import { getPhotoGalleryItems } from '~~/api/photoGallery.js'

import mixins from '~/mixins'

export default {
  layout: 'homePage',
  mixins: [mixins],
  data() {
    return {
      slides: [],
      introContent: {},

      testimonials: [],
      testimonialsPath: '',
      testimonialsBtnLabel: '',

      photoGalleryItems: [],
      photoGalleryTitle: '',
      photoGalleryBtnLabel: 'View More',
      photoGalleryBtnPath: '#galleries',
    }
  },

  async created() {
    this.isLoading = true

    this.slides = await getSlides()

    this.introContent = await getIntroContent()

    const testimonialsData = await getTestimonials()
    this.testimonials = testimonialsData.testimonials
    this.testimonialsPath = testimonialsData.path
    this.testimonialsBtnLabel = testimonialsData.btnLabel

    const { items, btnLabel, btnPath, title } = await getPhotoGalleryItems()
    this.photoGalleryItems = items
    this.photoGalleryTitle = title
    this.photoGalleryBtnLabel = btnLabel
    this.photoGalleryBtnPath = btnPath

    this.isLoading = false
  },

  head() {
    // Set Meta Tags for this Page
  },
}
</script>
