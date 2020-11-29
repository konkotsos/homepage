export default {
  data() {
    return {
      isLoading: true,
    }
  },
  computed: {
    isMobileView() {
      return this.$vuetify.breakpoint.mobile
    },
    isXsView() {
      return this.$vuetify.breakpoint.xsOnly
    },
  },
}
