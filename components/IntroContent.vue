<template>
  <v-container fluid class="intro-content" fill-height>
    <v-row no-gutter fill-height align-center justify-center>
      <v-col cols="12" md="6" class="pa-0 d-flex align-strech"
        ><v-img :src="introContent.src"></v-img
      ></v-col>
      <v-col cols="12" md="6" class="pa-0">
        <v-card
          height="100%"
          color="white"
          class="intro-content-info d-flex align-content-center justify-start flex-wrap pa-8"
          elevation="0"
        >
          <span class="super-title">{{ introContent.superTitle }}</span>
          <h2
            :class="{
              'main-title': !isMobileView,
              'main-title-mobile': isMobileView,
            }"
          >
            {{ introContent.title }}
          </h2>
          <p class="content-description">{{ introContent.description }}</p>
          <v-btn
            class="btn btn--main"
            :ripple="false"
            nuxt
            :to="introContent.path"
            >{{ introContent.btnLabel }}</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import mixins from '~/mixins'

export default {
  name: 'IntroContent',
  mixins: [mixins],
  props: {
    introContent: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
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
}
</script>

<style lang="scss">
.intro-content {
  background-color: #fff;
  padding-top: 2px;
  padding-bottom: 0;

  .intro-content-info {
    max-width: 650px;
    width: 90%;
    // padding-left: 70px;
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

  .content-description {
    font-size: $body-font-size;
    font-weight: $body-font-weight;
    line-height: $body-ling-height;
    color: $body-color;
    margin-bottom: 27px;
  }
}
</style>
