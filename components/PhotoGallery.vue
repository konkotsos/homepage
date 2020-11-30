<template>
  <v-container class="photo-gallery text-center">
    <h4 class="photo-gallery-title main-title--gallery text-center">
      {{ title }}
    </h4>

    <div class="photo-gallery-items d-flex flex-wrap justify-space-between">
      <v-img
        v-for="(item, index) in items"
        :key="index"
        :src="item.src"
        class="photo-gallery-item"
      ></v-img>
    </div>

    <v-btn nuxt :to="btnPath" class="btn btn--main text-center">{{
      btnLabel
    }}</v-btn>
  </v-container>
</template>

<script>
import mixins from '~/mixins'

export default {
  name: 'PhotoGallery',
  mixins: [mixins],
  props: {
    items: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    btnLabel: {
      type: String,
      required: true,
    },
    btnPath: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.photo-gallery {
  max-width: $container-width;
  width: 100%;
  padding: 90px 0;

  .photo-gallery-title {
    margin-bottom: 40px;
  }

  .photo-gallery-items {
    margin-bottom: 40px;

    .photo-gallery-item {
      width: 49%;
      max-width: 49%;
      margin-bottom: 2%;

      @media (min-width: $breakpoint-sm) {
        width: 24% !important;
        max-width: 24% !important;
      }
    }
  }
}
</style>
