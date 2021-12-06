<!-- 公告栏组件 -->
<template>
  <div class="notice-bar" @click="tipClick">
<!--    <div class="notice-bar__icon">-->
<!--      <img src="../assets/images/patient/homepage/tip.png">-->
<!--    </div>-->
    <div ref="wrap" class="notice-bar__wrap">
      <div ref="content" class="notice-bar__content" :style="contentStyle">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vertical_category',
  props: {
    text: {
      type: String,
      default: ''
    },
    speed: {
      type: Number,
      default: 50
    },
    defaultWidth: {
      type: Number,
      default: 375
    }
  },
  data () {
    return {
      contentStyle: {
        transitionDuration: '0s',
        transform: 'translateX(0px)'
      },
      wrapWidth: 0,
      contentWidth: 0,
      time: 0,
      timer: null,
      convertSpeed: 1
    }
  },
  created () {},
  mounted () {
    if (this.text) {
      this.init()
    }
  },
  watch: {
    text (val) {
      this.init()
    }
  },
  methods: {
    init () {
      const _width = window.innerWidth
      this.convertSpeed = _width / this.defaultWidth * this.speed  // 根据分辨率转化成不同的速度
      this.wrapWidth = this.$refs.wrap.offsetWidth
      this.contentWidth = this.$refs.content.offsetWidth
      this.startAnimate()
      this.timer = setInterval(() => {
        this.startAnimate()
      }, this.time * 1000)
      this.$once('hook:beforeDestroy', () => {
        clearInterval(this.timer)
        this.timer = null
      })
    },
    startAnimate () {
      this.contentStyle.transitionDuration = '0s'
      this.contentStyle.transform = 'translateX(' + this.wrapWidth + 'px)'
      this.time = (this.wrapWidth + this.contentWidth) / this.convertSpeed
      setTimeout(() => {
        this.contentStyle.transitionDuration = this.time + 's'
        this.contentStyle.transform = 'translateX(-' + this.contentWidth + 'px)'
      }, 200)
    },
    tipClick () {
      this.$emit('click')
    }
  }
}
</script>
<style scoped lang='less'>
.notice-bar {
  position: relative;
  width: 100%;
  .px2rem(height, 80);
  .px2rem(padding-left, 0);
  .px2rem(padding-right, 0);
  .px2rem(font-size, 28);
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #868DAA;
  display: flex;
  align-items: center;
  .notice-bar__icon {
    .px2rem(width, 56);
    .px2rem(height, 28);
    .px2rem(margin-right, 20);
    img {
      width: 100%;
    }
  }
  .notice-bar__wrap {
    position: relative;
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    overflow: hidden;
    .notice-bar__content {
      position: absolute;
      white-space: nowrap;
      transition-timing-function: linear;
    }
  }
}
</style>
