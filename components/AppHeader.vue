<template>
  <div v-if="!isLoading" class="app-header">
    <v-app-bar
      app
      hide-on-scroll
      :height="headerHeight"
      color="transparent"
      elevation="0"
      absolute
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
        <v-icon color="white">mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="showSidebar"
      class="app-sidebar"
      right
      temporary
      fixed
      color="rgba(0,0,0,0.8)"
    >
      <header-menu-list :menu-list="menuListLeft" vertical></header-menu-list>
      <header-menu-list :menu-list="menuListRight" vertical></header-menu-list>
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
  computed: {
    headerHeight() {
      return this.isMobileView ? 60 : 110
    },
  },

  async created() {
    this.isLoading = true
    this.socialsList = await getSocialsList()
    this.menuListLeft = await getHeaderMenuListLeft()
    this.menuListRight = await getHeaderMenuListRight()
    this.menuItemMyOrder = await getHeaderMyOrderMenuItem()
    this.isLoading = false
  },
}
</script>

<style lang="scss" scoped>
.app-header {
  margin-bottom: -$app-header-height;
  .container {
    max-width: $container-width;
  }

  .v-toolbar::after {
    content: '';
    display: block;
    border-bottom: 1px solid #fff;
    position: relative;
    bottom: 0;
    opacity: 0.3;
    max-width: 1300px;
    margin: auto;
  }

  .app-sidebar {
    padding-top: 50px;
  }
}
</style>
