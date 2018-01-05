<template>
    <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="my">

     <div class="top bg-primary" v-if="!isLogin">
       <q-btn outline color="white" @click="$router.push('/login')">
         登录/注册
       </q-btn>
     </div>
      <div v-else>
        <q-toolbar color="primary">
          <q-icon name="account_circle" />
          <q-btn >
            18600557240  币行
          </q-btn>
        </q-toolbar>
      </div>

      <q-list separator link no-border class="bg-white">
        <q-item>
          <q-item-side icon="perm_identity" color="grey-6" />
          <q-item-main @click="$router.push('identity')">
            <q-item-tile label>我的账户</q-item-tile>
          </q-item-main>
          <q-item-side right icon="chevron_right" />
        </q-item>
        <q-item>
          <q-item-side icon="home" color="grey-6" />
          <q-item-main>
            <q-item-tile label>身份认证</q-item-tile>
          </q-item-main>
          <q-item-side right icon="chevron_right" />
        </q-item>
        <q-item>
          <q-item-side icon="help" color="grey-6" />
          <q-item-main>
            <q-item-tile label>安全中心</q-item-tile>
          </q-item-main>
          <q-item-side right icon="chevron_right" />
        </q-item>
        <q-item>
          <q-item-side icon="priority_high" color="grey-6" />
          <q-item-main>
            <q-item-tile label>关于</q-item-tile>
          </q-item-main>
          <q-item-side right icon="chevron_right" />
        </q-item>
        <q-item>
          <q-item-side icon="power_settings_new" color="grey-6" />
          <q-item-main @click="logout">
            <q-item-tile label>退出</q-item-tile>
          </q-item-main>
          <q-item-side right icon="chevron_right" />
        </q-item>
      </q-list>


      <q-tabs slot="footer" color="white">
        <q-route-tab class="text-faded" slot="title" icon="assessment" to="/market" replace label="行情" />
        <q-route-tab class="text-faded" slot="title"  icon="monetization_on" to="/assets" replace label="资产" />
        <q-route-tab class="text-faded" slot="title"  icon="home" to="/assets" replace label="公告" />
        <q-route-tab class="text-primary" slot="title" icon="account_circle" to="/my" replace label="我的" />
      </q-tabs>
    </q-layout>
</template>

<script>
import {
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
  QItemMain,
  Dialog
} from 'quasar'

export default {
  name: 'my',
  components: {
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
      isLogin: sessionStorage.getItem('isLogin')
    }
  },
  computed: {
  },
  methods: {
    refresher () {},
    logout () {
      let self = this
      Dialog.create({
        title: '登出',
        message: '确认登出？.',
        buttons: [
          {
            label: '取消',
            handler () {
              console.log('Disagreed...')
            }
          },
          {
            label: '确认',
            handler () {
              self.isLogin = false
              window.sessionStorage.removeItem('isLogin')
              window.sessionStorage.removeItem('phone')
            }
          }
        ]
      })
    }
  },
  mounted () {
    document.title = '我的'
    console.log(this.$route)
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
 @import '~variables'
 @import '~assets/stylus/base.styl'

.my
  background-color $grey-11
  .q-item-section + .q-item-section
    margin-left 0
  .top
    height 8rem
    text-align center
    padding-top 3rem

</style>
