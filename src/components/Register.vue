<template>
    <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="register">

      <!--<q-toolbar color="primary">
        <q-btn
            flat
            @click="$router.go(-1)"
        >
          <q-icon name="chevron_left" />
        </q-btn>
        <q-toolbar-title>
          注册
        </q-toolbar-title>
        <q-btn
            flat
        >
          <q-icon class="hide" name="chevron_left" />
        </q-btn>
      </q-toolbar>-->



      <div class="form-wrap">
        <div class="login-form">
          <q-input v-model="email" type="email" placeholder="邮箱" clearable />
          <q-input v-model="password" type="password" clearable placeholder="密码" />
        </div>
        <div class="bind-btn-wrap">
          <q-btn color="primary" class="btn-full">
            注册
          </q-btn>
        </div>

      </div>
      <div class="tips">
        点击注册，表示您同意《CoinX网络服务条款》
      </div>


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
  name: 'register',
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
    refresher () {}
  },
  mounted () {
    document.title = '注册'
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
 @import '~variables'
 @import '~assets/stylus/base.styl'

.register
  background-color $grey-11
  .hide
    visibility   hidden
  .logo
    height 5rem
    text-align center
    font-size 2.5rem
  .form-wrap
    pading 0 1rem
  .login-form
    margin-bottom 1rem
    &>div
      &:first-child
        padding-top 16px
      &:last-child
        &:before
          display none
    padding 0 1rem
    background-color white
  .tips
    margin-top 1rem
    font-size 0.6rem
    color $grey-8
    text-align center
  .bind-btn-wrap
    margin  0 1rem

</style>
