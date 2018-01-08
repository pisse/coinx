<template>
    <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="deal">

      <q-toolbar color="primary bg-white" inverted>
        <q-btn
            flat
            @click="$router.go(-1)"
        >
          <q-icon name="chevron_left" />
        </q-btn>
        <q-toolbar-title>
          <q-popover ref="popover1" anchor="bottom middle" class="full-width">
            <q-list link separator class="scroll" style="min-width: 100px">
              <q-item
                      v-for="item in selectOpts2"
                      :key="item['label']"
                      @click="title=item.label; $refs.popover1.close()"
              >
                <q-item-main :label="item['label']"  ></q-item-main>
              </q-item>
            </q-list>
          </q-popover>
          <span>{{title}}</span><q-icon name="keyboard_arrow_down" />
        </q-toolbar-title>
        <q-btn
            flat
        >
          CNY
        </q-btn>
      </q-toolbar>

      <div class="row overview border-top-1px">
        <div class="col price">
          <q-icon class="price-icon text-grey-6" name="monetization_on" />  <span class="text-green">88472.26</span>
        </div>
        <div class="col right">
          <div class="row">
            <div class="col text-green">
              <span>-13.34</span><br>
              <span>-6.34%</span><q-icon name="arrow_upward" />
            </div>
            <div class="col max-min text-grey-8">
              <span>最高  121212.34</span><br>
              <span>最低  121790.34</span>
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
          <q-input v-model="email" type="number" class="real-only" readonly clearable placeholder="买入价格    245.67 CNY" />
          <q-input v-model="email" type="number" stack-label='买入数量' clearable placeholder="" suffix="BTC" />
          <q-input v-model="password" type="number" clearable stack-label='买入金额' placeholder="" suffix="CNY"/>
        </div>
      </div>

      <div class="bind-btn-wrap">
        <q-btn color="primary" class="btn-full" @click="login">
          快速买入
        </q-btn>
      </div>

      <div class="tip text-grey-8">
        温馨提示：超过三笔取消订单，将会冻结当天下单权限
      </div>

      <q-tabs slot="footer" color="white">
        <q-route-tab class="text-primary" slot="title"  icon="transform" to="/market" replace label="交易" />
        <q-route-tab class="text-faded" slot="title" icon="library_books" to="/orders" replace label="订单" />
        <q-route-tab class="text-faded" slot="title" icon="account_circle" to="/assets" replace label="账户" />
      </q-tabs>
    </q-layout>
</template>

<script>
import {
  QPopover,
  QSelect,
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
    QPopover,
    QSelect,
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
      title: 'BTC',
      email: '',
      select: '',
      selectOpts2: [
        {
          label: 'BTC',
          icon: 'disc_full'
        },
        {
          label: 'ETH',
          icon: 'confirmation_number'
        },
        {
          label: 'USDT',
          icon: 'tonality'
        }
      ],
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
 @import '~assets/stylus/base.styl'

.deal
  .q-toolbar-title
    text-align center
  .overview
    border-top-1px($grey-3)
    background-color white
    .price
      font-size 1rem
      line-height 3rem
      text-align left
      .price-icon
        margin-top: -4px;
        font-size: 1.5rem;
        margin-right: 10px;
        margin-left 1rem
    .right
      line-height 1.5rem
      font-size 0.6rem
  .real-only
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
    padding 0 1rem
    background-color white
  .bind-btn-wrap
    margin  0 1rem
  .tip
    margin-top 1rem
    font-size 0.6rem
    text-align center
 .q-popover
   .q-item
     text-align center


</style>
