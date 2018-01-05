import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    { path: '/', component: load('Market') },
    { path: '/home', component: load('Home') },
    { path: '/assets', component: load('Assets') },
    { path: '/notice', component: load('Notice') },
    { path: '/password', component: load('Password') },
    { path: '/deal', component: load('Deal') },
    { path: '/deal-account', component: load('DealAccount') },
    { path: '/my', component: load('My') },
    { path: '/identity', component: load('Identity') },
    { path: '/phone', component: load('Phone') },
    { path: '/login', component: load('Login') },
    { path: '/register', component: load('Register') },
    { path: '/market', component: load('Market') },
    { path: '/kchart', component: load('Kchart') },
    { path: '/reset-pwd', component: load('ResetPwd') },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
