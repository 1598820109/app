<template>
  <!-- 路由器 -->
  </router-view>
  <!-- 路由器 -->
  <div class="home  bottom_navbar contonter">
    <van-search shape="round" class="serchText" placeholder="请输入搜索关键词" />

    <!-- 文章频道 -->
    <van-tabs v-model="active" animated>
      <van-tab class="nav_top" v-for="(item,index) in channelsData" :title="item.name" :key="item.id">
          <!-- 文章列表 -->
          <article-list :item="item"></article-list>
          <!-- 文章列表end -->
      </van-tab>
    </van-tabs>
    <!-- 文章频道 end-->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  // 引入tabbar公共组件
  import TabBar from '@/components/Tabbar'
  import ArticleList from '@/components/ArticleList'
  import {
    getChannels
  } from '@/api/user'

  export default {
    name: 'contonter',
    data() {
      return {
        channelsData: [],
        active: 0,
      }
    },

    created() {
        this.channelsInfo()
    },

    // 公共组件
    components: {
      TabBar,
      ArticleList
    },
    methods: {
      async channelsInfo() {
        try {
          const {
            data
          } = await getChannels()
          this.channelsData = data.data.channels
          console.log(this.channelsData.id)
        } catch (err) {
          this.$toast.fail('获取文章频道数据失败')
          console.log('获取文章频道数据失败')
        }
      },

    }

  }
</script>

<style scoped lang="less">
  body {
    margin: 0px;
    padding: 0px;
    background-color: #f0f2fa;
  }

  .home {
    .serchText {
      position: fixed;
      width: 100%;
      top:0px;
      left:0px;
      z-index: 999;
      .van-field__control {
        color: #222 !important;
        border-radius: 30px;
        background-color: #f0f2fa2e;
      }

    }

  }
</style>
