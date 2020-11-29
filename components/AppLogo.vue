<template>
  <v-btn text :ripple="false" nuxt to="/">
    <v-img max-height="33" max-width="84" :src="'/mhk-logo.png'"></v-img>
  </v-btn>
</template>

<script>
export default {
  name: 'AppLogo',
  data() {
    return {
      logoPath: '~/assets/img/mhk-logo.png',
    }
  },
}
</script>

<style lang="scss" scoped>
.v-btn {
  &::before {
    opacity: 0 !important;
  }
}
</style>
