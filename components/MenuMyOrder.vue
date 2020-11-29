<template>
  <div>
    <v-btn
      text
      class="btn btn--alt"
      :class="{ 'btn--hidden-text': isMobileView }"
      height="50px"
      :ripple="false"
      tag="a"
      nuxt
      link
      x-small
      :title="menuItem.label"
      :to="menuItem.path"
    >
      <span v-if="!isMobileView" class="menu-item">{{ menuItem.label }}</span>
      <v-icon size="13">fas fa-shopping-cart</v-icon>
    </v-btn>
  </div>
</template>

<script>
import mixins from '~/mixins'

export default {
  name: 'MenuMyOrder',
  mixins: [mixins],
  props: {
    menuItem: {
      type: Object,
      default() {
        return {
          name: 'my order',
          label: 'My Order',
          path: '#myorder',
        }
      },
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scopped>
.menu-item {
  margin-right: 10px;
}
</style>
