<template>
    <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="market">

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
        <q-tab name="xtab-1" default label="ETC/BTC" slot="title" />
        <q-tab name="xtab-2" label="BTC/USDT" slot="title" />
        <q-tab name="xtab-3" label="ETC/USDT" slot="title" />
      </q-tabs>

      <div @click="$router.push('kchart')">
        <img class="market-img" src="~statics/market.png" alt="">
      </div>
      <div class="list-wrap" @click="$router.push('kchart')">
        <q-list separator>
          <q-item >
            <q-item-main>
              <q-item-tile class="text-primary" label lines="1">ETC/BTC</q-item-tile>
              <q-item-tile sublabel lines="2">
                <span>
                  24小时成交量 25008
                </span>

              </q-item-tile>
            </q-item-main>
            <q-item-side right>
              <q-item-tile class="upword" stamp><q-icon name="arrow_upward" />15328.91 USD</q-item-tile>
              <q-item-tile stamp>101313.68 CNY
                <q-btn color="green" small>
                  +41.74%
                </q-btn>
              </q-item-tile>

            </q-item-side>
          </q-item>
          <q-item >
            <q-item-main>
              <q-item-tile class="text-primary" label lines="1">BTC/USDT</q-item-tile>
              <q-item-tile sublabel lines="2">
                <span>
                  24小时成交量 25008
                </span>

              </q-item-tile>
            </q-item-main>
            <q-item-side right>
              <q-item-tile class="upword text-dark" stamp>15328.91 USD</q-item-tile>
              <q-item-tile stamp>101313.68 CNY
                <q-btn color="" small>
                  --
                </q-btn>
              </q-item-tile>

            </q-item-side>
          </q-item>
          <q-item >
            <q-item-main>
              <q-item-tile class="text-primary" label lines="1">ETC/USDT</q-item-tile>
              <q-item-tile sublabel lines="2">
                <span>
                  24小时成交量 25008
                </span>

              </q-item-tile>
            </q-item-main>
            <q-item-side right>
              <q-item-tile class="upword text-red" stamp><q-icon name="arrow_downward" />15328.91 USD</q-item-tile>
              <q-item-tile stamp>101313.68 CNY
                <q-btn color="red" small>
                  +41.74%
                </q-btn>
              </q-item-tile>

            </q-item-side>
          </q-item>
        </q-list>
      </div>

      <q-tabs slot="footer" color="white">
        <q-route-tab class="text-primary" slot="title" icon="assessment" to="/market" replace label="行情" />
        <q-route-tab class="text-faded" slot="title"  icon="monetization_on" to="/assets" replace label="资产" />
        <q-route-tab class="text-faded" slot="title"  icon="home" to="/notice" replace label="公告" />
        <q-route-tab class="text-faded" slot="title" icon="account_circle" to="/my" replace label="我的" />
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
  name: 'market',
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
    document.title = '行情'
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus" scoped="scoped">
 @import '~variables'

.market
  background-color $grey-11
  .q-tab.active
    border-bottom 1px solid $primary
  .q-btn-small
    min-height 16px
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

</style>
