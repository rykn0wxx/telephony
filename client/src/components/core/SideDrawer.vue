<template>
  <v-card>
    <v-navigation-drawer app dark fixed clipped floating v-model="drawerValue" mobile-break-point="991" height="100vh" width="260" id="app-drawer">
      <v-layout column>
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Telephony Dashboard</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-layout column fill-height>
          <v-list class="pt-0" dense>
            <v-divider></v-divider>
            <v-list-tile v-for="(link, index) in links" :key="index" :to="link.to" :active-class="color" avatar class="v-list-item">
              <v-list-tile-action>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ link.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-layout>
      </v-layout>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CoreSideDrawer',
  data () {
    return {
      links: [
        {
          to: '/home',
          icon: 'home',
          text: 'Home'
        },
        {
          to: '/about',
          icon: 'fingerprint',
          text: 'About'
        }
      ]
    }
  },
  computed: {
    ...mapState(['color']),
    drawerValue: {
      get () {
        return this.$store.getters.getDrawer
      },
      set (val) {
        this.$store.dispatch('setDrawer', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
