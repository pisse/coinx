<template>
    <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="market">

      <q-toolbar color="primary">
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
      </q-toolbar>

      <div @click="$router.push('kchart')">
        <img class="market-img" src="~statics/market.png" alt="">
      </div>
      <div class="list-wrap">
        <q-list separator>
          <q-item >
            <q-item-main>
              <q-item-tile class="text-primary" label lines="1">Coinbase</q-item-tile>
              <q-item-tile sublabel lines="2">
                <span>成交量 25008</span>
              </q-item-tile>
            </q-item-main>
            <q-item-side right>
              <q-item-tile class="upword" stamp><q-icon name="arrow_upward" />15328.91 USD</q-item-tile>
              <q-item-tile stamp>101313.68 CNY</q-item-tile>
            </q-item-side>
          </q-item>
          <q-item >
            <q-item-main>
              <q-item-tile class="text-primary" label lines="1">BitFinex</q-item-tile>
              <q-item-tile sublabel lines="2">
                <span>成交量 25008</span>
              </q-item-tile>
            </q-item-main>
            <q-item-side right>
              <q-item-tile stamp>15328.91 USD</q-item-tile>
              <q-item-tile stamp>101313.68 CNY</q-item-tile>
            </q-item-side>
          </q-item>
          <q-item >
            <q-item-main>
              <q-item-tile class="text-primary" label lines="1">Kraken</q-item-tile>
              <q-item-tile sublabel lines="2">
                <span>成交量 25008</span>
              </q-item-tile>
            </q-item-main>
            <q-item-side right>
              <q-item-tile stamp class="downward"><q-icon name="arrow_downward" />15328.91 USD</q-item-tile>
              <q-item-tile stamp>101313.68 CNY</q-item-tile>
            </q-item-side>
          </q-item>
          <q-item >
            <q-item-main>
              <q-item-tile class="text-primary" label lines="1">Bitstamp</q-item-tile>
              <q-item-tile sublabel lines="2">
                <span>成交量 25008</span>
              </q-item-tile>
            </q-item-main>
            <q-item-side right>
              <q-item-tile stamp>15328.91 USD</q-item-tile>
              <q-item-tile stamp>101313.68 CNY</q-item-tile>
            </q-item-side>
          </q-item>
        </q-list>
      </div>

      <q-tabs slot="footer" color="white">
        <q-route-tab class="text-primary" slot="title" icon="assessment" to="/market" replace label="行情" />
        <q-route-tab class="text-faded" slot="title"  icon="monetization_on" to="/assets" replace label="资产" />
        <q-route-tab class="text-faded" slot="title"  icon="home" to="/home" replace label="公告" />
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
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus" scoped="scoped">
 @import '~variables'
 @import '~assets/stylus/base.styl'

.market
  background-color $grey-11
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

</style>
