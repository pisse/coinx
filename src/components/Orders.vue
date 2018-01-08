<template>
    <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="orders">

     <!-- <q-toolbar color="primary">
        <q-btn
            flat
            @click="$refs.layout.toggleLeft()"
        >
          <q-icon name="chevron_left" />
        </q-btn>
        <q-toolbar-title>
          CoinX币行
        </q-toolbar-title>
        <q-btn
            flat
        >
          <q-icon class="hide" name="chevron_left" />
        </q-btn>
      </q-toolbar>-->

      <q-tabs align="justify" inverted class="market-head bg-white">
        <q-tab name="xtab-1" default label="未完成" slot="title" />
        <q-tab name="xtab-2" label="已完成" slot="title" />
        <q-tab name="xtab-3" label="已取消" slot="title" />

        <q-tab-pane name="xtab-1">
          <q-list highlight inset-separator class="bg-white">
            <q-item>
              <q-item-side avatar="statics/bit.jpg"/>
              <q-item-main label="BTC"
                           sublabel="$1345.121"
                           label-lines="1" />
              <q-item-side right>
                <q-item-tile stamp class="text-primary">买入</q-item-tile>
                <span class="">
              2017-01-05
            </span>
              </q-item-side>
            </q-item>

            <q-item>
              <q-item-side avatar="statics/bit1.jpg"/>
              <q-item-main label="BTC"
                           sublabel="$1345.121"
                           label-lines="1" />
              <q-item-side right>
                <q-item-tile stamp class="text-red">卖出</q-item-tile>
                <span class="">
              2017-01-05
            </span>
              </q-item-side>
            </q-item>

            <q-item>
              <q-item-side avatar="statics/bit.jpg"/>
              <q-item-main label="BTC"
                           sublabel="$1345.121"
                           label-lines="1" />
              <q-item-side right>
                <q-item-tile stamp class="text-primary">买入</q-item-tile>
                <span class="">
              2017-01-05
            </span>
              </q-item-side>
            </q-item>

          </q-list>
        </q-tab-pane>

        <q-tab-pane name="xtab-2">
          <div class="empty text-grey-8">
            暂时没有已完成订单
          </div>
        </q-tab-pane>

        <q-tab-pane name="xtab-3">
          <q-list highlight inset-separator class="bg-white">
            <q-item>
              <q-item-side avatar="statics/bit.jpg"/>
              <q-item-main label="BTC"
                           sublabel="$1345.121"
                           label-lines="1" />
              <q-item-side right>
                <q-item-tile stamp class="text-primary">买入</q-item-tile>
                <span class="">
              2017-01-05
            </span>
              </q-item-side>
            </q-item>

            <q-item>
              <q-item-side avatar="statics/bit1.jpg"/>
              <q-item-main label="BTC"
                           sublabel="$1345.121"
                           label-lines="1" />
              <q-item-side right>
                <q-item-tile stamp class="text-red">卖出</q-item-tile>
                <span class="">
              2017-01-05
            </span>
              </q-item-side>
            </q-item>

            <q-item>
              <q-item-side avatar="statics/bit.jpg"/>
              <q-item-main label="BTC"
                           sublabel="$1345.121"
                           label-lines="1" />
              <q-item-side right>
                <q-item-tile stamp class="text-primary">买入</q-item-tile>
                <span class="">
              2017-01-05
            </span>
              </q-item-side>
            </q-item>

          </q-list>
        </q-tab-pane>

      </q-tabs>

      <q-tabs slot="footer" color="white">
        <q-route-tab class="text-faded" slot="title"  icon="transform" to="/market" replace label="交易" />
        <q-route-tab class="text-primary" slot="title" icon="library_books" to="/orders" replace label="订单" />
        <q-route-tab class="text-faded" slot="title" icon="account_circle" to="/assets" replace label="账户" />
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
  name: 'orders',
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
    refresher () {}
  },
  mounted () {
    document.title = '全部订单'
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus" scoped="scoped">
 @import '~variables'

.orders
  background-color $grey-11
  .q-tab.active
    border-bottom 1px solid $primary
  .q-tab-pane
    border 0
    padding 0
  .q-list
    border 0
    padding 0
  .q-btn-small
    min-height 20px
    padding 0 5px
  .hide
    visibility   hidden
  .market-img
    width 100%
    display block
  .list-wrap
    background-color white
    .q-list
      border 0
    .upword
      color green
    .downward
      color red
    .q-item-sublabel > span
      font-weight normal
      color: $dark
  .empty
    font-size 0.6rem
    text-align center
    position absolute
    margin-top 50%
    width 100%

</style>
