<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <transition name="transitionName">
      <router-view class="container" />
    </transition>
  </div>
</template>

<script>
/*
 * Root component
 */
import {
  QTabs,
  QRouteTab,
  QLayout
} from 'quasar'

export default {
  name: 'router',
  data () {
    return {
      transitionName: 'slide',
      data: {}
    }
  },
  components: {
    QTabs,
    QRouteTab,
    QLayout
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = (toDepth < fromDepth || to.path === '/') ? 'fade' : 'slide'
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus">
  @import '~assets/stylus/base.styl'
  .container{
    position : absolute;
    top:0;
    right: 0;
    left: 0;
    bottom: 0;
    &.slide-enter-active, &.slide-leave-active{
      transition : all .3s linear;
    }
    &.slide-leave-active{
      opacity: 0;
    }

    &.slide-enter {
      transform: translate3d(100%, 0, 0);
    }
    &.slide-leave-active{
      transform: translate3d(-100%,0, 0);
    }

    &.fade-leave-active{
      transition : all .2s linear;
    }
    &.fade-enter-active{
      transition : all .1s linear 0.1s;
    }

    &.fade-enter {
      opacity: 0;
    }
    &.fade-leave-active{
      transform: translate3d(100%,0, 0);
      opacity: 0;
    }

  }

</style>
