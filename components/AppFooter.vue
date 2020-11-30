<template>
  <v-card class="app-footer" :img="'/img/footer-bg.png'">
    <v-container fluid class="app-footer-container">
      <v-row
        class="app-footer-header"
        :class="{ 'app-footer-header--mobile': isMobileView }"
        justify="center"
        align="center"
      >
        <v-divider color="white"></v-divider>
        <app-logo></app-logo>
        <v-divider color="white"></v-divider>
      </v-row>
      <v-row
        v-if="!isMobileView"
        class="app-footer-menus"
        justify="space-around"
      >
        <v-spacer v-if="!isMobileView"></v-spacer>
        <v-col
          v-for="({ title, items }, index) in menus"
          :key="index"
          class="app-footer-menu"
        >
          <div class="app-footer-menu-title" @click="toggleMenu">
            {{ title }}
          </div>
          <div class="app-footer-menu-items d-flex flex-column align-start">
            <v-btn
              v-for="({ label, path }, index2) in items"
              :key="index2"
              :ripple="false"
              tag="a"
              text
              nuxt
              link
              x-small
              :title="label"
              :to="path"
              class="menu-item app-footer-menu-item"
              >{{ label }}
            </v-btn>
          </div>
        </v-col>
        <v-col class="app-footer-menu app-footer-menu-icons">
          <div class="app-footer-menu-title">{{ socialsMenu.title }}</div>
          <div class="app-footer-menu-items d-flex justify-start">
            <v-btn
              v-for="({ name, icon, url }, index2) in socialsMenu.items"
              :key="index2"
              :ripple="false"
              small
              fab
              icon
              tag="a"
              :title="name"
              :href="url"
              target="_blank"
              class="app-footer-menu-item-icon"
            >
              <v-icon size="16">{{ icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-spacer v-if="!isMobileView"></v-spacer>
      </v-row>

      <v-row v-if="isMobileView" justify="center">
        <v-col cols="6">
          <v-expansion-panels
            class="footer-mobile-menus-panels"
            accordion
            mandatory
            flat
            tile
            color="transparent"
          >
            <v-expansion-panel
              v-for="({ title, items }, index) in menus"
              :key="index"
              class="app-footer-menu"
            >
              <v-expansion-panel-header
                class="app-footer-menu-title app-footer-menu-title--mobile"
                >{{ title }}</v-expansion-panel-header
              >
              <v-expansion-panel-content color="transparent">
                <div
                  class="app-footer-menu-items d-flex flex-column align-start"
                >
                  <v-btn
                    v-for="({ label, path }, index2) in items"
                    :key="index2"
                    :ripple="false"
                    tag="a"
                    text
                    nuxt
                    link
                    x-small
                    :title="label"
                    :to="path"
                    class="menu-item app-footer-menu-item"
                    >{{ label }}
                  </v-btn>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12">
          <div class="app-footer-menu-items d-flex justify-center">
            <v-btn
              v-for="({ name, icon, url }, index2) in socialsMenu.items"
              :key="index2"
              :ripple="false"
              small
              fab
              icon
              tag="a"
              :title="name"
              :href="url"
              target="_blank"
              class="app-footer-menu-item-icon"
            >
              <v-icon size="16">{{ icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row class="no-gutter" justify="center">
        <v-col class="text-center app-footer-copyright">
          <p>Copyright Online MTC Home Kitchens 2018 - All rights reserved.</p>
          <p>Responsive website design, Development & Hosting by mtc.</p>
          <v-divider class="divider-bottom" color="white"></v-divider>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { getFooterMenus } from '~~/api/common.js'
import mixins from '~/mixins'

export default {
  name: 'AppFooter',
  mixins: [mixins],
  data() {
    return {
      menus: [],
      socialsMenu: {},
    }
  },
  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint
    },
  },

  async created() {
    this.isLoading = true
    const { menus, socialsMenu } = await getFooterMenus()
    this.menus = menus
    this.socialsMenu = socialsMenu
    this.isLoading = false
  },
  methods: {
    toggleMenu(e) {
      // eslint-disable-next-line no-console
      console.log('toggleMenu', e)
      if (this.isMobileView)
        e.target
          .closest('.app-footer-menu')
          .classList.toggle('show-mobile-menu')
    },
  },
}
</script>

<style lang="scss">
.app-footer {
  padding-top: 40px;
  padding-bottom: 40px;
  background-repeat: repeat !important;

  .app-footer-container {
    max-width: $container-width;
  }

  .app-footer-menus {
    margin-bottom: 10px;
  }

  .app-footer-header {
    margin-bottom: 40px;
    &--mobile {
      margin-bottom: 00px;
    }
  }
  .v-divider {
    opacity: 0.3;
  }
  .app-footer-menu-title {
    font-size: 24px;
    font-weight: bold;
    line-height: 42px;
    letter-spacing: 0px;
    color: #ffffff;
    margin-left: 10px;
    margin-bottom: 20px;

    &--mobile {
      margin-bottom: 0px;
      line-height: 28px;
    }
  }

  .mobile-menu {
    padding-left: 30px;
    .app-footer-menu-title {
      margin-bottom: 0px;
      line-height: 1em;
    }
  }

  .app-footer-menu-icons {
    .app-footer-menu-title {
      margin-left: 0;
    }
  }
  .app-footer-menu-item {
    font-size: 13px;
    line-height: 30px;
    letter-spacing: 3px;
    color: #ffffff;
    text-transform: uppercase;
    opacity: 0.8;
    margin-bottom: 13px;
  }
  .app-footer-menu-item-icon {
    color: $ui-icons-color !important;
    background: white !important;
    margin-right: 15px;
  }
  .app-footer-copyright {
    color: #fff;
    opacity: 0.5;
    max-width: 90%;
    font-size: 13px;
    line-height: 26px;
    letter-spacing: 0px;
    p {
      margin-bottom: 10px;
    }
  }

  .divider-bottom {
    margin-top: 30px;
  }
  // .mobile-menu {
  //   .app-footer-menu-items {
  //     display: none !important;
  //   }
  // }
  // .mobile-menu.show-mobile-menu {
  //   .app-footer-menu-items {
  //     display: flex !important;
  //   }
  // }
  .footer-mobile-menus-panels {
    min-height: 340px;
  }
  .v-expansion-panels {
    .v-expansion-panel {
      background-color: transparent !important;
    }
    .v-expansion-panel-header {
      padding: 8px;
      line-height: 1;
      .v-expansion-panel-header__icon .v-icon {
        color: #fff !important;
      }
    }
  }

  // .v-expansion-panels
  //   .v-expansion-panel-header
  //   .v-expansion-panel-header__icon
  //   .v-icon {
  //   color: red !important;
  // }
}
</style>
