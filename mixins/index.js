export default {
  computed: {
    isMobileView() {
      return this.$vuetify.breakpoint.mobile
    },
    isXsView() {
      return this.$vuetify.breakpoint.xsOnly
    },
  },
}
