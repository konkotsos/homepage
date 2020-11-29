<template>
  <div>
    <v-app-bar
      app
      hide-on-scroll
      height="110"
      color="transparent"
      elevation="0"
    >
      <v-container>
        <v-row class="no-gutter d-flex justify-space-between align-center">
          <header-socials-list
            :socials-list="socialsList"
          ></header-socials-list>
          <v-spacer></v-spacer>
          <header-menu-list
            v-if="!isMobileView"
            :menu-list="menuListLeft"
          ></header-menu-list>
          <v-spacer></v-spacer>
          <app-logo></app-logo>
          <v-spacer></v-spacer>
          <header-menu-list
            v-if="!isMobileView"
            :menu-list="menuListRight"
          ></header-menu-list>
          <v-spacer></v-spacer>
          <menu-my-order :menu-item="menuItemMyOrder"></menu-my-order>
        </v-row>
      </v-container>

      <v-btn v-if="isMobileView" icon @click.stop="showSidebar = !showSidebar">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="showSidebar" right temporary fixed>
      sidebar
      <header-menu-list></header-menu-list>
      <header-menu-list></header-menu-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {
  getSocialsList,
  getHeaderMenuListLeft,
  getHeaderMenuListRight,
  getHeaderMyOrderMenuItem,
} from '~~/api/common.js'

import mixins from '~/mixins'

export default {
  name: 'AppHeader',
  mixins: [mixins],
  data() {
    return {
      showSidebar: false,
      socialsList: [],
      menuListLeft: [],
      menuListRight: [],
      menuItemMyOrder: {},
    }
  },

  async created() {
    this.socialsList = await getSocialsList()
    this.menuListLeft = await getHeaderMenuListLeft()
    this.menuListRight = await getHeaderMenuListRight()
    this.menuItemMyOrder = await getHeaderMyOrderMenuItem()
  },
}
</script>

<style lang="scss">
.container {
  max-width: $container-width;
}

.container::after {
  content: '';
  display: block;
  border-bottom: 1px solid #fff;
  position: relative;
  top: 29px;
  opacity: 0.3;
}
</style>
