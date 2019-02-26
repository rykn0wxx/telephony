<template>
  <v-navigation-drawer id="app-drawer" v-model="inpValue" app dark clipped mobile-break-point="991" width="260">
    <!-- <v-img :src="require('../../assets/sidebar-bg.jpeg')" height="100%"></v-img> -->
    <!-- <div class="img-backdrop" :style="{height: listNavHeight + 'px'}"></div> -->
    <v-layout fill-height column>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar color="white">
            <v-img :src="logo" height="34" contain />
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            Vuetify MD
          </v-list-tile-title>
        </v-list-tile>
        <v-divider />
          <v-list-tile v-for="(item, index) in tileItems" :key="index" avatar class="v-list-item" :active-class="color" :to="item.to">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CoreDrawerz',
  data () {
    return {
      listNavHeight: null,
      logo: '',
      tileItems: [
        {
          to: '/home',
          icon: 'home',
          text: 'Home'
        },
        {
          to: '/about',
          icon: 'fingerprint',
          text: 'About'
        },
        {
          to: '#',
          icon: 'dashboard',
          text: 'AA'
        },
        {
          to: '#',
          icon: 'dashboard',
          text: 'BB'
        },
        {
          to: '#',
          icon: 'dashboard',
          text: 'CC'
        },
        {
          to: '#',
          icon: 'dashboard',
          text: 'DD'
        },
        {
          to: '#',
          icon: 'dashboard',
          text: 'EE'
        },
        {
          to: '#',
          icon: 'dashboard',
          text: 'FF'
        }
      ]
    }
  },
  mounted () {
    this.sideNavFix()
    window.addEventListener('resize', this.sideNavFix)
    this.listNavHeight = document.getElementById('app-drawer').scrollHeight
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.sideNavFix)
  },
  computed: {
    ...mapState(['color']),
    inpValue: {
      get () {
        return this.$store.getters.getDrawer
      },
      set (val) {
        this.$store.dispatch('setDrawer', val)
      }
    }
  },
  methods: {
    sideNavFix () {
      const listElem = document.getElementById('app-drawer')
      const bodyElem = document.querySelector('body')
      console.log('List Element', listElem.scrollHeight)
      console.log('Body Element', bodyElem.offsetHeight)
    }
  }
}
</script>

<style lang="scss" scoped>
#app-drawer {
  overflow-y: hidden;
  .scrolling {
    overflow-y: auto;
  }
  .img-backdrop {
    background-image: url(../../assets/sidebar-bg.jpeg);
    background-size: cover;
    display: block;
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    z-index: -1;
    // &::after {
    //   content: '';
    //   height: 100%;
    //   width: 100%;
    //   background-image: url(../../assets/sidebar-bg.jpeg);
    //   background-size: cover;
    //   background-repeat: no-repeat;
    //   background-position: center;
    //   display: block;
    //   filter: blur(5px) opacity(0.8);
    //   z-index: -1;
    //   position: absolute;
    // }
  }
}
</style>
