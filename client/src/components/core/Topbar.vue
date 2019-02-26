<template>
  <v-toolbar app dark clipped-left class="elevation-2" id="core-toolbar" color="blue-grey darken-4">
    <v-toolbar-side-icon @click.stop="toggleSideDrawer"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-menu bottom left content-class="dropdown-menu" offset-y transition="slide-y-transition">
        <v-btn v-ripple flat slot="activator" class="toolbar-items" color="blue-grey darken-4">
          <v-badge color="error" overlap>
            <template slot="badge">{{ notifications.length }}</template>
            <v-icon color="tertiary">notifications</v-icon>
          </v-badge>
        </v-btn>
        <v-card light>
          <v-list dense>
            <v-list-tile
              v-for="notification in notifications"
              :key="notification"
              @click="dummyClick">
              <v-list-tile-title
                v-text="notification" />
            </v-list-tile>
          </v-list>
        </v-card>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'CoreTopbar',
  data () {
    return {
      title: 'Telephony',
      notifications: [
        'Mike, John responded to your email',
        'You have 5 new tasks',
        'You\'re now a friend with Andrew',
        'Another Notification',
        'Another One'
      ]
    }
  },
  methods: {
    toggleSideDrawer () {
      this.$store.dispatch('setDrawer', !this.$store.getters.getDrawer)
    },
    dummyClick () {}
  },
  watch: {
    $route (val) {
      this.title = val.name
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
