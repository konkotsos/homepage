<template>
  <v-main class="app-body">
    <nuxt />
  </v-main>
</template>

<script>
export default {
  name: 'AppAppBody',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.app-body {
  position: relative;
  top: -$app-header-height;
}
</style>
