import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import startCase from 'lodash/startCase'

const routePaths = []

const reqComp = require.context('@/views', true, /\.vue$/)

reqComp.keys().forEach(fileName => {
  const rFile = fileName.replace(/^\.\//, '')
  const rPath = '/' + fileName.toLowerCase().replace(/^\.\//, '').replace(/\.vue$/, '')
  const rView = upperFirst(camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')))
  const rName = startCase(rView)
  routePaths.push({
    path: rPath,
    view: rView,
    name: rName,
    file: rFile
  })
})

function theRoutes (path, view, name, file) {
  return {
    name: name || view,
    path,
    component: (resolve) => import(`@/views/${file}`).then(resolve)
  }
}

routePaths.map(path => {
  console.log(theRoutes(path.path, path.view, path.name, path.file))
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routePaths.map(path => theRoutes(path.path, path.view, path.name, path.file)).concat([
    // { path: '/', name: 'home', component: Home },
    { path: '*', redirect: '/' },
    { path: '/', redirect: '/home', component: Home }
  ])
})
