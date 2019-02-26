import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import './_app.styl'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  // theme: {
  //   primary: '#ee44aa',
  //   secondary: '#424242',
  //   accent: '#82B1FF',
  //   error: '#FF5252',
  //   info: '#2196F3',
  //   success: '#4CAF50',
  //   warning: '#FFC107'
  // },
  iconfont: 'md',
  theme: {
    primary: '#4caf50',
    secondary: '#4caf50',
    tertiary: '#495057',
    accent: '#82B1FF',
    error: '#f55a4e',
    info: '#00d3ee',
    success: '#5cb860',
    warning: '#ffa21a'
  },
  background: '#f06292'
})
console.log('**********************', Vuetify)
