<template>
  <v-toolbar
    app
    light
    id="core-toolbar"
    flat
    prominent
    dense
    class="elevation-2">
    <div class="v-toolbar-title">
      <v-toolbar-title
        class="tertiary--text font-weight-light">
        <v-btn
          v-if="responsive"
          class="default v-btn--simple"
          dark
          icon
          @click.stop="onClickBtn">
          <v-icon>menu</v-icon>
        </v-btn>
        {{ title }}
      </v-toolbar-title>
    </div>

    <v-spacer />
    <v-toolbar-items>
      <v-flex
        align-center
        layout
        py-2>
        <v-text-field
          v-if="responsiveInput"
          class="mr-4 mt-2 purple-input"
          label="Search..."
          hide-details
          color="purple" />
        <router-link
          v-ripple
          class="toolbar-items"
          to="/" >
          <v-icon color="tertiary">dashboard</v-icon>
        </router-link>
        <v-menu
          bottom
          left
          content-class="dropdown-menu"
          offset-y
          transition="slide-y-transition">
          <router-link
            v-ripple
            slot="activator"
            class="toolbar-items"
            to="/notifications">
            <v-badge
              color="error"
              overlap>
              <template slot="badge">
                {{ notifications.length }}
              </template>
              <v-icon color="tertiary">notifications</v-icon>
            </v-badge>
          </router-link>
          <v-card>
            <v-list dense>
              <v-list-tile
                v-for="notification in notifications"
                :key="notification"
                @click="onClick">
                <v-list-tile-title
                  v-text="notification" />
              </v-list-tile>
            </v-list>
          </v-card>
        </v-menu>
        <router-link
          v-ripple
          class="toolbar-items"
          to="/user-profile">
          <v-icon color="tertiary">person</v-icon>
        </router-link>
      </v-flex>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'CoreToolbar',
  data () {
    return {
      notifications: [
        'Mike, John responded to your email',
        'You have 5 new tasks',
        'You\'re now a friend with Andrew',
        'Another Notification',
        'Another One'
      ],
      title: null,
      responsive: false,
      responsiveInput: false
    }
  },
  watch: {
    '$route' (val) {
      this.title = val.name
    }
  },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    onClickBtn () {
      this.$store.dispatch('setDrawer', !this.$store.getters.getDrawer)
    },
    onClick () {
    },
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
        this.responsiveInput = false
      } else {
        this.responsive = false
        this.responsiveInput = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
