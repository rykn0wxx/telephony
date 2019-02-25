<template>
  <v-menu
    :close-on-content-click="false"
    bottom
    left
    min-width="300"
    max-width="300"
    nudge-left="12"
    offset-x
    transition="slide-y-transition">
    <v-btn
      slot="activator"
      class="elevation-0"
      color="grey"
      dark
      fab
      fixed
      style="top: 96px;"
      top>
      <v-icon>settings</v-icon>
    </v-btn>
    <v-card>
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex xs12>
            <div class="text-xs-center body-2 text-uppercase sidebar-filter">Sidebar Filters</div>
            <v-layout justify-center>
              <v-avatar
                v-for="(c, i) in colors"
                :key="i"
                :class="[c === color ? 'color-active color-' + c: 'color-' + c]"
                size="23"
                @click="setTheColor(c)" />
            </v-layout>
            <v-divider class="mt-3"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CoreFilter',
  data () {
    return {
      colors: [
        'primary',
        'info',
        'success',
        'warning',
        'danger'
      ]
    }
  },
  computed: {
    ...mapState(['color']),
    color () {
      return this.$store.getters.getColor
    }
  },
  methods: {
    setTheColor (c) {
      this.$store.dispatch('setColor', c)
    }
  }
}
</script>

<style lang="scss">
.v-avatar, .v-responsive {
  cursor: pointer;
}
</style>
