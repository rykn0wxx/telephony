export default {
  setUser (state, setUser) {
    state.user = setUser
  },
  setToken (state, setToken) {
    state.token = setToken
    state.isUserLogin = setToken ? true : null
  },
  setDrawer (state, setDrawer) {
    state.drawer = setDrawer
  },
  setColor (state, setColor) {
    state.color = setColor
  },
  toggleDrawer (state, toggleDrawer) {
    state.drawer = !state.drawer
  }
}
