<template>
  <div>
    <v-app-bar fixed app height="110" color="transparent" elevation="0">
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
          <menu-my-order></menu-my-order>
        </v-row>
      </v-container>

      <v-btn v-if="isMobileView" icon @click.stop="showSidebar = !showSidebar">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-divider dark color="white" class="header-bottom-border"></v-divider>

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
} from '~~/api/common.js'

export default {
  name: 'AppHeader',

  data() {
    return {
      showSidebar: false,
      socialsList: [],
      menuListLeft: [],
      menuListRight: [],
    }
  },
  computed: {
    isMobileView() {
      return this.$vuetify.breakpoint.mobile
    },
  },
  async created() {
    this.socialsList = await getSocialsList()
    this.menuListLeft = await getHeaderMenuListLeft()
    this.menuListRight = await getHeaderMenuListRight()
  },
}
</script>

<style lang="scss">
.container {
  max-width: $container-width;
}
.header-bottom-border {
  max-width: $container-width !important;
  margin: auto;
  position: relative;
  top: 110px;
  opacity: 0.3;
}
</style>
