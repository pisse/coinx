<template>
  <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="k-chart">

    <!--<q-toolbar color="primary" slot="header">
      <q-btn
          flat
          @click="$router.go(-1)"
      >
        <q-icon name="chevron_left" />
      </q-btn>
      <q-toolbar-title>
        CoinX BTC/USD
      </q-toolbar-title>
      <q-btn
          flat
      >
        <q-icon class="hide" name="chevron_left" />
      </q-btn>
    </q-toolbar>-->

    <div >
      <img class="k-img" src="~statics/k.png" alt="">
    </div>

    <div class="deal-table">
      <div class="row deal-table-header bg-grey-7 text-grey-5">
        <div class="col">买入量</div>
        <div class="col">买入价</div>
        <div class="col">卖出价</div>
        <div class="col">卖出量</div>
      </div>
      <div class="row deal-table-body bg-dark">
        <div class="col text-green">0.22221</div>
        <div class="col text-green">15521.22221</div>
        <div class="col text-red">16574.22221</div>
        <div class="col text-red">0.22221</div>
      </div>
      <div class="row deal-table-body bg-dark">
        <div class="col text-green">0.22221</div>
        <div class="col text-green">15521.22221</div>
        <div class="col text-red">16574.22221</div>
        <div class="col text-red">0.22221</div>
      </div>
      <div class="row deal-table-body bg-dark">
        <div class="col text-green">0.22221</div>
        <div class="col text-green">15521.22221</div>
        <div class="col text-red">16574.22221</div>
        <div class="col text-red">0.22221</div>
      </div>
      <div class="row deal-table-body bg-dark">
        <div class="col text-green">0.22221</div>
        <div class="col text-green">15521.22221</div>
        <div class="col text-red">16574.22221</div>
        <div class="col text-red">0.22221</div>
      </div>
    </div>

    <q-tabs slot="footer" color="dark">
      <q-route-tab class="text-white" slot="title"  icon="transform" to="/deal" replace label="交易" />
      <q-route-tab class="text-faded" slot="title" icon="home" to="/market" replace label="更多" />
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
  name: 'k-chart',
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
  beforeDestroy () {
  }
}
</script>

<style lang='stylus'>
 @import '~variables'
 @import '~assets/stylus/base.styl'

.k-chart
  background-color $grey-11
  .hide
    visibility   hidden
  .k-img
    width 100%
    display block
  .list-wrap
    background-color white
    .q-list
      border 0
  .chart
    height 200px
  .deal-table
    text-align center
    .deal-table-header
      font-size 0.8rem
    .deal-table-body
      font-size 0.7rem
      padding 0.2rem 0

</style>
