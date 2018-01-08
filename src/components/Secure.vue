<template>
    <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="secure">

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

      <!--<div class="notice bg-white border-top-1px">
        <q-icon size="1.2rem" name="notifications_none" />
        <span class="notice-content">谷歌验证,提现，修改密码，及安全设置时用以输入谷歌验证码。下载谷歌身份验证器： iphone android</span>
      </div>-->

      <q-alert
              color="primary"
              ref="destroyableAlert"
              enter="bounceInRight"
              leave="bounceOutLeft"
              v-model="visible2"
              dismissible
              :actions="[{label: '提现，修改密码，及安全设置时用以输入谷歌验证码。', handler () {}}]"
      >
        谷歌验证

      </q-alert>


      <div class="text-primary secret">
        请手工输入密钥：BW6UDELF47WB4RKE
      </div>


      <div class="form-wrap">
        <div class="login-form">
          <q-input v-model="email" type="email" placeholder="设备名称：" />
          <q-input v-model="password" type="password" placeholder="谷歌验证码：" />
        </div>
      </div>

      <div class="bind-btn-wrap">
        <q-btn color="primary" class="btn-full" @click="submit">
            确认提交
        </q-btn>
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
  name: 'secure',
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
      visible2: '',
      password: ''
    }
  },
  computed: {
  },
  methods: {
    refresher () {},
    submit () {
      window.sessionStorage.setItem('isLogin', true)
      this.$router.push({path: 'my'})
    }
  },
  mounted () {
    document.title = '安全中心'
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
 @import '~variables'
 @import '~assets/stylus/base.styl'

.secure
  background-color $grey-11
  .secret
    margin 1rem 0.5rem 0
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
