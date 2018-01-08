<template>
  <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="identity">

    <!--<q-toolbar color="primary">
      <q-btn
          flat
          @click="$router.go(-1)"
      >
        <q-icon name="chevron_left" />
      </q-btn>
      <q-toolbar-title>
        找回登录密码
      </q-toolbar-title>
      <q-btn
          flat
      >
        <q-icon class="hide" name="chevron_left" />
      </q-btn>
    </q-toolbar>-->

    <q-stepper flat ref="stepper" v-model="step" color="primary" :contractable="contractable">
      <q-step name="first" icon="security" title="1.个人基本信息认证">

        <div class="form-wrap">
          <div class="login-form">
            <!--<q-field
                icon="stay_primary_portrait"
                error-label="We got an error"
            >
              <q-input v-model="mobile" type="tel" placeholder="手机号" />
            </q-field>

            <q-field
              label="Horizontal"
              inset="label"
                error-label="We got an error"
            >
              <q-input v-model="mobile" type="tel" placeholder="图片验证码" />
            </q-field>-->

            <q-select
                    v-model="select"
                    float-label="国家地区"
                    :options="selectOpts"
            />
            <q-input v-model="mobile" float-label="姓名" placeholder="" />
            <q-select
                    v-model="select"
                    float-label="证件类型"
                    :options="selectOpts2"
            />
            <q-input v-model="code" float-label="证件号码" placeholder="" />
          </div>
        </div>
        <!--<p>An ad group contains one or more ads which target a shared set of keywords.</p>
        <q-stepper-navigation v-if="!globalNavigation">
          <q-btn color="primary" @click="$refs.stepper.next()">Continue</q-btn>
        </q-stepper-navigation>-->
      </q-step>

      <q-step name="finish" icon="beenhere" title="2.个人高级信息认证" >
        <div class="second-content">
          <br>
          <q-uploader
                  float-label="1.上传证件正面照"
                  url="url" />
          <br>
          <q-uploader
                  float-label="2.上传证件反面照"
                  url="url" />
          <br>
          <q-uploader
                  float-label="3.上传手持证件照"
                  url="url" />
          <br>

        </div>
        <!-- <p>An ad group contains one or more ads which target a shared set of keywords.</p>

         <q-stepper-navigation v-if="!globalNavigation">
           <q-btn color="primary" @click="$refs.stepper.next()">Continue</q-btn>
           <q-btn color="primary" flat @click="$refs.stepper.previous()">Back</q-btn>
         </q-stepper-navigation>-->
      </q-step>


      <q-stepper-navigation v-if="globalNavigation">
        <q-btn color="primary" @click="$refs.stepper.next()">
          {{ step === 'finish' ? '高级认证' : '初级认证' }}
        </q-btn>
      </q-stepper-navigation>

    </q-stepper>

    <p class="tips">
      若您未绑定手机号，请前往绑定
    </p>


    <q-tabs slot="footer" color="white">
      <q-route-tab class="text-faded" slot="title" icon="assessment" to="/market" replace label="行情" />
      <q-route-tab class="text-faded" slot="title"  icon="monetization_on" to="/assets" replace label="资产" />
      <q-route-tab class="text-faded" slot="title"  icon="home" to="/notice" replace label="公告" />
      <q-route-tab class="text-faded" slot="title" icon="account_circle" to="/my" replace label="我的" />
    </q-tabs>
  </q-layout>
</template>

<script>
  import {
    QUploader,
    QSelect,
    QStepperNavigation,
    QStepper,
    QStep,
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
    name: 'identity',
    components: {
      QUploader,
      QSelect,
      QStepperNavigation,
      QStepper,
      QStep,
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
        select: '',
        hide: '',
        mobile: '',
        code: '',
        step: 'first',
        options: ['contractable', 'disable_payment', 'step_error', 'global_navigation'],
        selectOpts: [
          {
            label: 'China',
            value: 'goog'
          },
          {
            label: 'Japan',
            value: 'fb'
          },
          {
            label: 'Kereo',
            value: 'twtr'
          },
          {
            label: 'Russia',
            value: 'appl'
          },
          {
            label: 'France',
            value: 'ora'
          }
        ],
        selectOpts2: [
          {
            label: '身份证',
            value: 'goog'
          },
          {
            label: '护照',
            value: 'fb'
          }
        ]
      }
    },
    computed: {
      alt () {
        return this.options.includes('alt')
      },
      contractable () {
        return this.options.includes('contractable')
      },
      globalNavigation () {
        return this.options.includes('global_navigation')
      },
      stepError () {
        return this.options.includes('step_error')
      },
      disabledStep () {
        return this.options.includes('disable_payment')
      },
      progress () {
        return this.options.includes('progress')
      }
    },
    methods: {
      refresher () {}
    },
    mounted () {
      document.title = '认证'
    },
    beforeDestroy () {
    }
  }
</script>

<style lang="stylus">
  @import '~variables'
  @import '~assets/stylus/base.styl'

  .identity
    background-color $grey-11
    .hide
      visibility   hidden
    .form-wrap
      margin 0 0.5rem
    .login-form
      margin-bottom 1rem
      &>div
        &:first-child
          padding-top 16px
        &:last-child
          &:before
            display none
      padding 0 0.5rem
      background-color white
    .q-stepper
      box-shadow none
    .shadow-1
      box-shadow none
    .q-stepper-horizontal .q-stepper-step-inner
      padding 0
    .q-stepper-step-content
      background-color white
    .q-stepper-horizontal.q-stepper-contractable .q-stepper-label
      display block !important
      position absolute
      left 0
      width 100%
      right 0
      top 50px
      text-align center
      &:after
        display: none
      .q-stepper-title
        font-size 0.8rem
        font-weight normal
    .q-stepper-nav
      .q-btn
        width 100%
    .tips
      text-align center
      font-size 0.8rem
      color $grey-6
    .second-content,.third-content
      padding 0 1rem
      position relative
      .q-if
        padding-top 16px
        &:before
          display: none
      .send-btn
        position absolute
        width 120px
        right 0
        top 30px
        border-left: 1px solid $grey-6;
        border-radius: 0
        min-height: inherit
        color $grey-6
    .third-content
      .q-if
        margin-top -2px
        padding-top 0
      .send-btn
        top 15px



</style>
