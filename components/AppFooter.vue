<template>
  <div>footer</div>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {}
  },
  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint
    },
  },
  created() {
    // eslint-disable-next-line no-console
    console.log(this.$vuetify.breakpoint)
  },
}
</script>

<style></style>
