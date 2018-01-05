<template>
    <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="phone">

      <q-toolbar color="primary">
        <q-btn
            flat
            @click="$router.go(-1)"
        >
          <q-icon name="chevron_left" />
        </q-btn>
        <q-toolbar-title>
          修改交易密码
        </q-toolbar-title>
        <q-btn
            flat
        >
          <q-icon class="hide" name="chevron_left" />
        </q-btn>
      </q-toolbar>

      <div class="form-wrap">
        <q-input v-model="mobile" float-label="输入密码" placeholder="" />
        <q-input v-model="mobile" float-label="请再次输入密码" placeholder="" />
        <q-input v-model="code" float-label="验证码" placeholder="" />
        <q-btn
            class="send-btn"
            flat
            @click="sendCode"
        >
          {{v_text}}
        </q-btn>
      </div>
      <div class="bind-btn-wrap">
        <q-btn color="primary" class="btn-full" @click="bind">
          绑定
        </q-btn>
      </div>



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
  QInput,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

export default {
  name: 'phone',
  components: {
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
      hide: '',
      mobile: '',
      code: '',
      timer: null,
      v_text: '获取验证码',
      iscaptchaing: false,
      step: 'first'
    }
  },
  computed: {
  },
  methods: {
    refresher () {},
    startCount () {
      if (this.v_text === '0') {
        this.v_text = '获取验证码'
        this.iscaptchaing = false
        return
      }
      // console.log(this.v_text)
      this.timer = setTimeout(() => {
        this.v_text = (parseInt(this.v_text) - 1) + ''
        this.startCount()
      }, 1000)
    },
    sendCode () {
      this.iscaptchaing = true
      this.v_text = '60'
      this.startCount()
    },
    bind () {
      window.sessionStorage.setItem('phone', 18600557240)
      this.$router.go(-1)
    }
  },
  mounted () {
    console.log(this.$route)
    document.title = '修改交易密码'
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
 @import '~variables'
 @import '~assets/stylus/base.styl'

.phone
  .hide
    visibility hidden
  background-color $grey-11
  .q-item-section + .q-item-section
    margin-left 0
  .form-wrap
    &>div:first-child
      padding-top 16px
    background-color white
    padding 0 1rem
    position relative
    .send-btn
      position absolute
      width 120px
      right 0
      bottom 8px
      border-left: 1px solid $grey-6;
      border-radius: 0
      min-height: inherit
      color $grey-6
  .bind-btn-wrap
    margin  0 1rem
</style>
