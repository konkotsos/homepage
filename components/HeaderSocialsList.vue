<template>
  <div>
    <v-btn
      v-for="({ name, icon, url }, index) in socials"
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
import { getSocialsList } from '~~/api/common.js'
export default {
  name: 'HeaderSocialsList',
  data() {
    return {
      socials: [],
    }
  },
  async created() {
    const socials = await getSocialsList()
    this.socials = socials
  },
}
</script>

<style></style>
