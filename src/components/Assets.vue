<template>
    <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="assets">


      <q-tabs align="justify" inverted class="deal-action bg-white">
        <q-tab name="xtab-1" class="hide" default label="账户" slot="title" />
      <!--  <q-tab name="xtab-2" label="充币" slot="title" />
        <q-tab name="xtab-3" label="提币" slot="title" />-->

        <q-tab-pane name="xtab-1">
          <div class="assets-list">
            <div class="item" v-for="n in 3" :key="n">
              <div class="text-primary">{{list[n-1]}}</div>
              <div class="row detail">
                <div class="col"><span>总资产</span> <div>1000C</div></div>
                <div class="col"><span>可用</span> <div>900</div></div>
                <div class="col"><span>已冻结</span> <div>100</div></div>
              </div>
            </div>
          </div>
        </q-tab-pane>

        <q-tab-pane name="xtab-2">
          <q-alert
                  color="warning"
                  ref="destroyableAlert"
                  enter="bounceInRight"
                  leave="bounceOutLeft"
                  v-model="visible2"
                  dismissible
                  :actions="[{label: '禁止向BTC地址充值除BTC之外的资产，任何充入BTC地址的非BTC资产将不可找回。', handler () {}}]"
          >
            重要提示：
          </q-alert>
          <br>

          <!--<q-tabs inverted align="justify" class="recharge-action">
            <q-tab name="xtab-11" default label="BTC" slot="title" />
            <q-tab name="xtab-12" label="ETH" slot="title" />
            <q-tab name="xtab-13" label="USDT" slot="title" />
          </q-tabs>-->

          <!--<div class="title">
            选择币种：
          </div>
          <q-option-group
                  color="primary"
                  type="radio"
                  v-model="group"
                  :options="[
                    { label: 'BTC', value: 'op1' },
                    { label: 'ETH', value: 'op2' },
                    { label: 'USDT', value: 'op3' }
                  ]"
                />
-->
          <q-select
                  v-model="select"
                  float-label="选择币种"
                  :options="selectOpts2"
          />

          <br>
          <div class="bind-btn-wrap">
            <q-btn color="primary" class="btn-full" @click="submit">
              {{btnText}}
            </q-btn>
          </div>

          <div class="recharge-tips text-grey-8">
            充值须知：<br>
            <span>1. 使用BTC地址充值需要6个网络确认才能到账</span><br>
            <span>2. 每次充值需大于0.01个BTC，少于这个数目将无法正确充值到账</span><br>
            <span>3. 因BTC交易量大网络确认时间长，为了您的交易更快被确认建议您增加网络手续费。</span>
          </div>

          <!--
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
          -->
        </q-tab-pane>

        <q-tab-pane name="xtab-3">
          <!--<q-alert
                  color="warning"
                  ref="destroyableAlert"
                  enter="bounceInRight"
                  leave="bounceOutLeft"
                  v-model="visible2"
                  dismissible
                  :actions="[{label: '为了您提币处理快速，请留意提币记录单的状态和描述，及时完成相关操作。', handler () {}}]"
          >
            注意：
          </q-alert>-->

          <q-select
                  v-model="select"
                  float-label="选择币种"
                  :options="selectOpts2"
          />
       <!--   <q-input v-model="mobile" float-label="提币地址" placeholder="" />-->

          <q-input v-model="text" :float-label="coinType" class="all" color="secondary" :after="[{icon: '全部', content: true, handler () {
            click();
          }}]" />

         <!-- <q-input v-model="code2" readonly	 stack-label='手续费' placeholder="" />-->
          <br>

          <q-btn color="primary" class="btn-full" @click="submit">
            确认
          </q-btn>

          <div class="recharge-tips text-grey-8">
            注意：<br>
            <span>为了您提币处理快速，请留意提币记录单的状态和描述，及时完成相关操作</span><br>

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
    QSelect,
    QRadio,
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
    QItemMain,
    QOptionGroup
  } from 'quasar'

  export default {
    name: 'assets',
    components: {
      QSelect,
      QRadio,
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
      QItem,
      QOptionGroup
    },
    data () {
      return {
        btnText: '立即生成',
        coinType: '金额(BTC)',
        visible2: '',
        radio: '',
        select: 'goog',
        text: '100',
        email: 'email',
        password: 'password',
        num: 5,
        mobile: '',
        code: '',
        code2: '0.01',
        list: ['BTC', 'ETH', 'USDT', 'BT1'],
        group: 'op1',
        selectOpts: [
          {
            label: 'BTC',
            value: 'goog'
          },
          {
            label: 'ETH',
            value: 'fb'
          },
          {
            label: 'USDT',
            value: 'fb'
          }
        ],
        selectOpts2: [
          {
            label: 'BTC',
            value: 'goog'
          },
          {
            label: 'ETH',
            value: 'fb'
          },
          {
            label: 'USDT',
            value: 'fb'
          }
        ]
      }
    },
    computed: {
    },
    methods: {
      submit () {
        this.btnText = '正在生成，请稍后。。。'
      },
      click () {
        this.text = 1000
      },
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
    .deal-action .q-tabs-head
      display none
    .q-tabs-inverted.q-tabs-position-top .q-tabs-panes
      border 0
    background-color $grey-11
    .q-tab.active
      border-bottom 1px solid $primary
    .recharge-action
      .q-tab.active
        border-bottom 1px solid $primary
    .q-alert-container
      padding 0 10px
    .recharge-tips
      font-size 0.6rem
      margin-top 1rem
    .all
      .q-icon
        font-size 0.6rem
    .q-tab-pane
      border 0
      background-color white
      .detail
        .col
          text-align center
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