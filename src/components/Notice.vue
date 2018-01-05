<template>
    <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="home">

      <q-list highlight inset-separator>
        <q-item>
          <q-item-side avatar="statics/bit.jpg"/>
          <q-item-main label="不说再见"
                       sublabel="2017年10月31日晚评 比特币日内价格多投强势上涨，放量上涨"
                       label-lines="1" />
          <q-item-side right stamp="1 min" />
        </q-item>
        <q-item multiline>
          <q-item-side avatar="statics/bit1.jpg"/>
          <q-item-main label="不说再见"
                       sublabel="2017年10月31日晚评 比特币日内价格多投强势上涨，放量上涨"
                       label-lines="1" />
          <q-item-side right stamp="1 week<br>ago" />
        </q-item>
        <q-item multiline>
          <q-item-side avatar="statics/bits3.jpg"/>
          <q-item-main label="不说再见"
                       sublabel="2017年10月31日晚评 比特币日内价格多投强势上涨，放量上涨"
                       label-lines="1" />
          <q-item-side right>
            <q-item-tile stamp>10 min ago</q-item-tile>
            <span class="text-amber">
              <q-item-tile icon="star"  />
            </span>
          </q-item-side>
        </q-item>

      </q-list>

      <q-tabs slot="footer" color="white">
        <q-route-tab class="text-faded" slot="title" icon="assessment" to="/market" replace label="行情" />
        <q-route-tab class="text-faded" slot="title"  icon="monetization_on" to="/assets" replace label="资产" />
        <q-route-tab class="text-primary" slot="title"  icon="home" to="/home" replace label="公告" />
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
  QItemTile,
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
    QItemTile,
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
    document.title = '公告'
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
