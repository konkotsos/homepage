<template>
  <div :class="{ 'd-flex flex-column justify-start': vertical }">
    <v-btn
      v-for="({ label, path }, index) in menuList"
      :key="index"
      :ripple="false"
      tag="a"
      text
      nuxt
      link
      x-small
      :title="label"
      :to="path"
      class="menu-item"
      :class="{ 'menu-item--vertical': vertical }"
      >{{ label }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenuList',
  props: {
    menuList: {
      type: Array,
      default() {
        return []
      },
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss"></style>
