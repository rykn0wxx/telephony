export default {
  setUser ({ commit }, setUser) {
    commit('setUser', setUser)
  },
  setToken ({ commit }, setToken) {
    commit('setToken', setToken)
  },
  setDrawer ({ commit }, setDrawer) {
    commit('setDrawer', setDrawer)
  },
  setColor ({ commit }, setColor) {
    commit('setColor', setColor)
  },
  toggleDrawer ({ commit }, toggleDrawer) {
    commit('toggleDrawer', toggleDrawer)
  }
}
