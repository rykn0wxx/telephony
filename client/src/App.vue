<template>
  <v-app dark>
    <core-side-drawer />
    <core-topbar />
    <core-view />
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss">
@import 'sass/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
