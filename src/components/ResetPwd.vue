<template>
    <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100" class="reset">

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
        <q-step name="first" icon="security" title="验证身份">

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

              <q-input v-model="mobile" float-label="手机号" placeholder="" />
              <q-input v-model="code" float-label="图片验证码" placeholder="" />
            </div>
          </div>
          <!--<p>An ad group contains one or more ads which target a shared set of keywords.</p>
          <q-stepper-navigation v-if="!globalNavigation">
            <q-btn color="primary" @click="$refs.stepper.next()">Continue</q-btn>
          </q-stepper-navigation>-->
        </q-step>

        <q-step name="second" icon="beenhere" title="安全验证" >
          <div class="second-content">
            <q-input v-model="mobile" float-label="短信验证码" placeholder="" />
            <q-btn
                class="send-btn"
                flat
                @click="$router.go(-1)"
            >
              发送验证码
            </q-btn>
          </div>
         <!-- <p>An ad group contains one or more ads which target a shared set of keywords.</p>

          <q-stepper-navigation v-if="!globalNavigation">
            <q-btn color="primary" @click="$refs.stepper.next()">Continue</q-btn>
            <q-btn color="primary" flat @click="$refs.stepper.previous()">Back</q-btn>
          </q-stepper-navigation>-->
        </q-step>

        <q-step name="finish" icon="done_all" title="重置密码">
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

              <q-input v-model="mobile" float-label="登录密码" placeholder="" />
              <q-input class="confirm-pwd"  v-model="code" float-label="确认密码" placeholder="" />
              <q-input v-model="hide" class="hidden"></q-input>
            </div>
          </div>

          <div class="third-content">
            <q-input v-model="mobile" float-label="短信验证码" placeholder="" />
            <q-btn
                class="send-btn"
                flat
                @click="$router.go(-1)"
            >
              发送验证码
            </q-btn>
          </div>
          <!--<p>
            Try out different ad text to see what brings in the most customers, and learn how

            issues.
          </p>

          <q-stepper-navigation v-if="!globalNavigation">
            <q-btn color="primary" @click="$refs.stepper.goToStep('campaign')">Restart</q-btn>
            <q-btn color="primary" flat @click="$refs.stepper.previous()">Back</q-btn>
          </q-stepper-navigation>-->
        </q-step>

        <q-stepper-navigation v-if="globalNavigation">
          <q-btn color="primary" @click="$refs.stepper.next()">
            {{ step === 'finish' ? '完成' : '下一步' }}
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
  name: 'reset',
  components: {
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
      hide: '',
      mobile: '',
      code: '',
      step: 'first',
      options: ['contractable', 'disable_payment', 'step_error', 'global_navigation']
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
    document.title = '重置密码'
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
 @import '~variables'
 @import '~assets/stylus/base.styl'

.reset
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
