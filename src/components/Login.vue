<template>
    <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="login">

      <!--<q-toolbar color="primary">
        <q-btn
            flat
            @click="$router.go(-1)"
        >
          <q-icon name="chevron_left" />
        </q-btn>
        <q-toolbar-title>
          登录
        </q-toolbar-title>
        <q-btn
            flat
        >
          <q-icon class="hide" name="chevron_left" />
        </q-btn>
      </q-toolbar>-->

      <div class="logo bg-primary text-white">
        CoinX
      </div>


      <div class="form-wrap">
        <div class="login-form">
          <q-input v-model="email" type="email" placeholder="邮箱" />
          <q-input v-model="password" type="password" placeholder="密码" />
        </div>
      </div>

      <div class="bind-btn-wrap">
        <q-btn color="primary" class="btn-full" @click="login">
          登录
        </q-btn>
      </div>

      <q-toolbar inverted class="text-btn">
        <q-btn flat @click="$router.push('reset-pwd')">
          忘记密码
        </q-btn>
        <q-toolbar-title>
        </q-toolbar-title>
        <q-btn flat @click="$router.push('register')">
          注册账号
        </q-btn>
      </q-toolbar>

      <q-tabs slot="footer" color="white">
        <q-route-tab class="text-faded" slot="title" icon="assessment" to="/market" replace label="行情" />
        <q-route-tab class="text-faded" slot="title"  icon="monetization_on" to="/assets" replace label="资产" />
        <q-route-tab class="text-faded" slot="title"  icon="home" to="/home" replace label="公告" />
        <q-route-tab class="text-primary" slot="title" icon="account_circle" to="/my" replace label="我的" />
      </q-tabs>
    </q-layout>
</template>

<script>
import {
  QField,
  QInput,
  QSideLink,
  QItemTile,
  QAlert,
  QCarousel,
  QPullToRefresh,
  QTabs,
  QRouteTab,
  QTabPane,
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

export default {
  name: 'login',
  components: {
    QField,
    QInput,
    QSideLink,
    QItemSide,
    QItemTile,
    QItemMain,
    QAlert,
    QCarousel,
    QPullToRefresh,
    QTabs,
    QRouteTab,
    QTabPane,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QIcon,
    QBtn,
    QList,
    QListHeader,
    QItem
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
  },
  methods: {
    refresher () {},
    login () {
      window.sessionStorage.setItem('isLogin', true)
      this.$router.push({path: 'my'})
    }
  },
  mounted () {
    document.title = '登录'
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
 @import '~variables'
 @import '~assets/stylus/base.styl'

.login
  background-color $grey-11
  .hide
    visibility   hidden
  .logo
    padding-top 2.5rem
    height 8rem
    text-align center
    font-size 2.5rem
  .login-form
    margin-bottom 1rem
    &>div
      &:first-child
        padding-top 16px
      &:last-child
        &:before
          display none
    padding 0 0.5rem
    background-color white
  .bind-btn-wrap
    margin  0 1rem
  .text-btn
    font-size 0.6rem
    color: $blue-4

</style>
