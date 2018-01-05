<template>
    <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="assets">
      <q-tabs inverted align="justify" class="deal-action">
        <q-tab name="xtab-1" default label="现货账户" slot="title" />
        <q-tab name="xtab-2" label="合约账户" slot="title" />

        <q-tab-pane name="xtab-1">
          <div class="assets-list">
            <div class="item" v-for="n in 5" :key="n">
              <div class="text-primary">{{list[n-1]}}</div>
              <div class="row detail">
                <div class="col"><span>可用</span> <div>0.000000BTC</div></div>
                <div class="col"><span>冻结</span> <div>0.000000BTC</div></div>
              </div>
            </div>
          </div>
        </q-tab-pane>

        <q-tab-pane name="xtab-2">
          <div class="assets-list">
            <div class="item" v-for="n in 5" :key="n">
              <div class="text-primary">{{list[n-1]}}</div>
              <div class="row detail">
                <div class="col"><span>已实现盈亏</span> <div>0.000000BTC</div></div>
                <div class="col"><span>未实现盈亏</span> <div>0.000000BTC</div></div>
              </div>
              <div class="row detail">
                <div class="col"><span>可用保证金</span> <div>0.000000BTC</div></div>
                <div class="col"><span>冻结保证金</span> <div>0.000000BTC</div></div>
              </div>
              <div class="row detail">
                <div class="col"><span>已用保证金</span> <div>0.000000BTC</div></div>
                <div class="col"></div>
              </div>
            </div>
          </div>
        </q-tab-pane>

      </q-tabs>



      <q-tabs slot="footer" color="white">
        <q-route-tab class="text-faded" slot="title" icon="assessment" to="/market" replace label="行情" />
        <q-route-tab class="text-primary" slot="title"  icon="monetization_on" to="/assets" replace label="资产" />
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
    name: 'assets',
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
        password: '',
        list: ['BTC', 'LTC', 'ETH', 'BCH', 'USDT', 'BT1']
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
      document.title = '资产'
    },
    beforeDestroy () {
    }
  }
</script>

<style lang="stylus">
  @import '~variables'

  .assets
    .q-tabs-inverted .q-tab.active
      border-bottom 1px solid
    .q-tab-pane
      border 0
    .assets-list
      background-color white
      .item
        margin-bottom 1rem
        border-bottom 1px solid rgba(0,0,0,0.1)
        &:last-child
          border-bottom 0
      .detail
        margin-top 0.5rem
        margin-bottom 0.3rem
        font-size 0.75rem
        line-height 1.5rem
</style>