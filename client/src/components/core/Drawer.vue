<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260">
    <v-img
      :src="require('../../assets/sidebar-bg.jpeg')"
      height="100%"
      class="img-backdrop">
      <v-layout
        class="fill-height"
        column>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar color="white">
              <v-img :src="logo" height="34" contain />
            </v-list-tile-avatar>
            <v-list-tile-title class="title">
              Vuetify MD
            </v-list-tile-title>
          </v-list-tile>
          <v-divider/>
          <v-list-tile v-if="responsive">
            <v-text-field
              class="purple-input search-input"
              label="Search..."
              color="purple" />
          </v-list-tile>
          <v-list-tile
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            :active-class="color"
            avatar
            class="v-list-item">
            <v-list-tile-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title
              v-text="link.text" />
          </v-list-tile>
          <div style="height:50px;"></div>
        </v-list>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CoreDrawer',
  data () {
    return {
      logo: '',
      links: [
        {
          to: '/about',
          icon: 'fingerprint',
          text: 'About'
        },
        {
          to: '/home',
          icon: 'home',
          text: 'Home'
        }
      ],
      responsive: true
    }
  },
  methods: {
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    }
  },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  computed: {
    ...mapState(['image', 'color']),
    // inputValue () {
    //   return this.$store.getters.getDrawer
    // }
    inputValue: {
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

<style lang="scss">
#app-drawer {
  .v-list__tile {
    border-radius: 4px;
    &--buy {
      margin-top: auto;
      margin-bottom: 17px;
    }
  }

  .v-image__image--contain {
    top: 9px;
    height: 60%;
  }

  .search-input {
    margin-bottom: 30px !important;
    padding-left: 15px;
    padding-right: 15px;
  }
  // .img-backdrop {
  //   overflow-y: auto;
  // }
  .v-responsive__sizer {
    padding-bottom: 0;
  }
  // .v-image__image {
  //   height: 100vh;
  // }
  .v-list {
    height: 100%;
  }
}
</style>
