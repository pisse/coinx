<template>
    <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="deal">

      <!--<q-toolbar color="primary">
        <q-btn
            flat
            @click="$router.go(-1)"
        >
          <q-icon name="chevron_left" />
        </q-btn>
        <q-toolbar-title>
          交易
        </q-toolbar-title>
        <q-btn
            flat
        >
          <q-icon class="hide" name="chevron_left" />
        </q-btn>
      </q-toolbar>-->

      <div class="row overview">
        <div class="col text-green price">
          <q-icon class="price-icon" name="monetization_on" />  88472.26
        </div>
        <div class="col right">
          <div class="row">
            <div class="col text-red">
              <span>-1790.34</span><br>
              <span>-1790.34</span>
            </div>
            <div class="col max-min">
              <span>最高121212.34</span><br>
              <span>最低121790.34</span>
            </div>
          </div>
        </div>
      </div>

      <q-tabs inverted align="justify" class="deal-action">
        <q-tab name="xtab-1" default icon="arrow_downward" label="买入" slot="title" />
        <q-tab name="xtab-2" icon="arrow_upward" label="卖出" slot="title" />
      </q-tabs>

      <div class="form-wrap">
        <div class="deal-form">
          <q-input v-model="email" type="number" clearable placeholder="买入数量" suffix="BTC" />
          <q-input v-model="password" type="number" clearable placeholder="买入金额" suffix="CNY"/>
        </div>
      </div>

      <div class="bind-btn-wrap">
        <q-btn color="primary" class="btn-full" @click="login">
          快速买入
        </q-btn>
      </div>

      <q-tabs slot="footer" color="white">
        <q-route-tab class="text-primary" slot="title"  icon="transform" to="/market" replace label="交易" />
        <q-route-tab class="text-faded" slot="title" icon="library_books" to="/" replace label="订单" />
        <q-route-tab class="text-faded" slot="title" icon="account_circle" to="/deal-account" replace label="账户" />
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
  QTab,
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
  name: 'deal',
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
    QTab,
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
    document.title = '交易'
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
 @import '~variables'

.deal
  .overview
    background-color white
    .price
      font-size 1rem
      line-height 3rem
      text-align center
      .price-icon
        margin-top: -4px;
        font-size: 1.5rem;
        margin-right: 20px;
    .right
      line-height 1.5rem
      font-size 0.6rem
  background-color $grey-11
  .deal-action
    margin-top 0.5rem
    background-color white
    border-bottom 1px solid $grey-2
    .column
      flex-direction inherit
  .q-tab > .q-icon + .q-tab-label
    margin-top 0
  .q-tabs-inverted .q-tab.active
    border-bottom 1px solid
  .hide
    visibility   hidden
  .logo
    height 5rem
    text-align center
    font-size 2.5rem
  .deal-form
    margin-bottom 1rem
    &>div
      &:first-child
        padding-top 16px
        margin-top 0
      &:last-child
        &:before
          display none
    padding 0 0.5rem
    background-color white
  .bind-btn-wrap
    margin  0 1rem

</style>
