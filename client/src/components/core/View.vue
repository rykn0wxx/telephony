<template>
  <v-content>
    <div id="core-view">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </div>
  </v-content>
</template>

<script>
export default {
  name: 'CoreView'
}
</script>

<style lang="scss" scoped>
#core-view {
  padding-bottom: 100px;
}
</style>
