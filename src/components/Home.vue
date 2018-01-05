<template>
    <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="home">

      <!--<q-toolbar slot="header">
        <q-btn @click="$router.push('/list')">&lt;!&ndash;<q-icon name="chevron_left" style="font-size: 25px" />&ndash;&gt;</q-btn>
        <q-toolbar-title>
          CoinX
        </q-toolbar-title>
      </q-toolbar>-->
      <img class="banner" src="~statics/banner.jpg" alt="">

      <q-carousel dots class="carousel">
        <div slot="slide" class="bg-white">
          <div class="row market">
            <div class="col">
              <p class="name">BTC/USD</p>
              <p class="price text-positive">$14284.31</p>
              <p class="diff more">
                <span class="num">+7.24</span>
                <span class="rate">+0.05%</span>
              </p>
            </div>
            <div class="col">
              <p class="name">BTC/USD</p>
              <p class="price text-positive">$14284.31</p>
              <p class="diff more">
                <span class="num">+7.24</span>
                <span class="rate">+0.05%</span>
              </p>
            </div>
            <div class="col">
              <p class="name">BTC/USD</p>
              <p class="price text-positive">$14284.31</p>
              <p class="diff more">
                <span class="num">+7.24</span>
                <span class="rate">+0.05%</span>
              </p>
            </div>
          </div>
        </div>
        <div slot="slide" class="bg-white">
          <div class="row market">
            <div class="col">
              <p class="name">BTC/USD</p>
              <p class="price text-positive">$14284.31</p>
              <p class="diff more">
                <span class="num">+7.24</span>
                <span class="rate">+0.05%</span>
              </p>
            </div>
            <div class="col">
              <p class="name">BTC/USD</p>
              <p class="price text-positive">$14284.31</p>
              <p class="diff more">
                <span class="num">+7.24</span>
                <span class="rate">+0.05%</span>
              </p>
            </div>
            <div class="col">
              <span class="more-market">
                更多行情>
              </span>
            </div>
          </div>
        </div>
      </q-carousel>

      <div class="notice border-top-1px">
        <q-icon size="1.2rem" name="notifications_none" />
        <span class="notice-content">CoinX币行关于限时开放BTC分叉币发放的公告</span>
      </div>

      <div class="novice bg-white">
        <q-toolbar class="bg-white text-dark">
          <q-btn flat>
            新手指导
          </q-btn>
          <q-toolbar-title flat>

          </q-toolbar-title>
          <q-btn flat>
            <q-icon name="more_horiz" />
          </q-btn>
        </q-toolbar>

        <q-carousel class="bits carousel">
          <div slot="slide" class="bg-white">
            <div class="row market xs-gutter">
              <div class="col">
                <img src="~statics/bit.jpg" alt="">
              </div>
              <div class="col">
                <img src="~statics/bit1.jpg" alt="">
              </div>
            </div>
          </div>
          <div slot="slide" class="bg-white">
            <div class="row market xs-gutter">
              <div class="col">
                <img src="~statics/bits3.jpg" alt="">
              </div>
              <div class="col">
                <img src="~statics/bits4.jpg" alt="">
              </div>
            </div>
          </div>
        </q-carousel>
        <div class="more-detail border-top-1px text-primary">
          更多
        </div>
      </div>

      <div class="analysis bg-white">
        <q-toolbar class="bg-white text-dark">
          <q-btn flat>
            分析师说
          </q-btn>
          <q-toolbar-title flat>

          </q-toolbar-title>
          <q-btn flat>
            <q-icon name="more_horiz" />
          </q-btn>
        </q-toolbar>
        <div class="row pic">
          <div class="col-3">
            <img src="~statics/analysis.jpg" alt="">
          </div>
          <div class="col-9 analysis-text">
            比特币（BitCoin）的概念最初由中本聪在2009年提出，根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络。比特币是一种P2P形式的数字货币。点对点的传输意味着一个去中..
          </div>

        </div>
        <div class="more-detail border-top-1px text-primary">
          更多
        </div>
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
  name: 'home',
  components: {
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
    QItem,
    QItemSide,
    QItemMain
  },
  data () {
    return {}
  },
  computed: {
  },
  methods: {
    refresher () {}
  },
  mounted () {
    document.title = '首页'
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus" scoped="scoped">
 @import '~variables'
 @import '~assets/stylus/base.styl'

.home
  background-color $grey-11
  .banner
    display block
    border 0
    width 100%
    height 120px
  .carousel
    .q-carousel-track > div
      min-height inherit
      padding 1rem
    .q-carousel-toolbar
      bottom -10px
    .q-carousel-dots i
      font-size 0.6rem
  .market
    .col
      text-align center
      position relative
      &:after
        position absolute
        right 0
        top 2px
        bottom 2px
        content ''
        display block
        width 1px
        margin 10px 0
        background-color $grey-12
      &:last-child
        &:after
          display none
      p
        margin-bottom 0
      .name,.num,.rate
        margin-bottom 0
        font-size 0.6rem
      .diff
        span
          float left
          display inline-block
          width 50%
        &.more
          color: $green
        &:after
          content ''
          display block
          clear both
      .more-market
        font-size 0.6rem
        position absolute
        top 50%
        margin-top -8px
        height 16px
        display block
        width 100%
        text-align center
  .notice
    font-size : 0.8rem
    padding 0.6rem 0.5rem
    border-top-1px($grey-13)
    background-color white
    .notice-content
      margin-left 0.5rem
  .novice, .analysis
    margin-top 0.5rem
    .col
      &:after
        display none
    .bits
     .q-carousel-track > div
        min-height inherit
        padding 0 0.5rem
     img
        width 100%
        display block
        height 100px
    .more-detail
      margin  1rem 0.5rem
      border-top-1px($grey-13)
      text-align center
      font-size 0.6rem
      height 2rem
      line-height 2rem
  .analysis
    .analysis-text
      font-size 0.6rem
    .pic
      img
        padding 0 0.5rem
        width 100%
        height 50px
        display block
</style>
