<template>
  <div>
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
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss"></style>
