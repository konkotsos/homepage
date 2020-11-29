<template>
  <div>
    <v-app-bar fixed app>
      <v-container>
        <v-row class="d-flex justify-space-between">
          <header-socials-list
            :socials-list="socialsList"
          ></header-socials-list>
          <header-menu-list
            v-if="!isMobileView"
            :menu-list="menuListLeft"
          ></header-menu-list>
          <app-logo></app-logo>
          <header-menu-list v-if="!isMobileView"></header-menu-list>
          <menu-my-order></menu-my-order>
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
import { getSocialsList, getHeaderMenuListLeft } from '~~/api/common.js'

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
      return this.$vuetify.breakpoint.xsOnly
    },
  },
  async created() {
    this.socialsList = await getSocialsList()
    this.menuListLeft = await getHeaderMenuListLeft()
  },
}
</script>

<style lang="scss">
.container {
  max-width: $container-width;
}
</style>
