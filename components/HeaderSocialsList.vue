<template>
  <div>
    <v-btn
      v-for="({ name, icon, url }, index) in socialsList"
      :key="index"
      :ripple="false"
      small
      icon
      tag="a"
      :title="name"
      :href="url"
      target="_blank"
    >
      <v-icon size="16">{{ icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'HeaderSocialsList',
  props: {
    socialsList: {
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

<style></style>
