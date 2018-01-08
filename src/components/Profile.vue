<template>
    <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="profile">

      <!--<q-toolbar color="primary">
        <q-btn
            flat
            @click="$router.go(-1)"
        >
          <q-icon name="chevron_left" />
        </q-btn>
        <q-toolbar-title>
          我的账户
        </q-toolbar-title>
        <q-btn
            flat
        >
          <q-icon class="hide" name="chevron_left" />
        </q-btn>
      </q-toolbar>-->

      <q-list separator link no-border class="bg-white">
        <q-item>
          <q-item-side icon="phone_iphone" color="grey-6" />
          <q-item-main @click="$router.push('phone')">
            <q-item-tile label>手机号</q-item-tile>
          </q-item-main>

          <q-item-side right v-if="phone">{{phone}}</q-item-side>
          <q-item-side right icon="chevron_right" v-else />
        </q-item>
        <q-item>
          <q-item-side icon="mail" color="grey-6" />
          <q-item-main>
            <q-item-tile label>邮箱</q-item-tile>
          </q-item-main>
          <q-item-side right >huangxx@163.com</q-item-side>
        </q-item>

        <q-item>
          <q-item-side icon="mail" color="grey-6" />
          <q-item-main @click="$router.push('password')">
            <q-item-tile label>修改交易密码</q-item-tile>
          </q-item-main>
          <q-item-side right icon="chevron_right" />
        </q-item>
      </q-list>


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
  name: 'profile',
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
      isLogin: sessionStorage.getItem('isLogin'),
      phone: sessionStorage.getItem('phone')
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
            }
          }
        ]
      })
    }
  },
  mounted () {
    console.log(this.$route)
    document.title = '账号信息'
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
 @import '~variables'
 @import '~assets/stylus/base.styl'

.profile
  .hide
    visibility hidden
  background-color $grey-11
  .q-item-section + .q-item-section
    margin-left 0
  .top
    height 8rem
    text-align center
    padding-top 3rem

</style>
