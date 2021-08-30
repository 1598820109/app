<template>
  <div class="ask">
    <van-row type="flex">
      <van-col span="6">
        <van-image class="avatar" round width="2.1rem" height="2.1rem"
          src="https://img0.baidu.com/it/u=3770990833,1013306388&fm=26&fmt=auto&gp=0.jpg" />
      </van-col>
    </van-row>


    <tab-bar></tab-bar>
  </div>
</template>

<script>
  // 引入tabbar公共组件
  import TabBar from '@/components/Tabbar'

  export default {
    name: 'contonter',
    data() {
      return {}
    },

    components: {
      TabBar
    }

  }
</script>
