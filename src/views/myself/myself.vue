<template>
  <div class="ask">
    <!-- 顶部登录 -->
    <div class="topNav">

      <!-- 已登录  https://img0.baidu.com/it/u=1468107830,2351388133&fm=26&fmt=auto&gp=0.jpg -->
      <div class="imageInfo" v-if="user">
        <van-image class="avatar" round width="67px" height="67px"
          :src="userInfo.photo" />
        <router-link to="/" tag="a" class="loginText"> {{userInfo.name}}</router-link>
        <van-row gutter="20" class="warp">
          <router-link tag="van-col" to="/login" span="8">动态:{{ userInfo.art_count}}</router-link>
          <router-link tag="van-col" to="/login" span="8">关注:{{ userInfo.follow_count}}</router-link>
          <router-link tag="van-col" to="/login" span="8">粉丝:{{ userInfo.fans_count}}</router-link>
          <router-link tag="van-col" to="/login" span="8">获赞:{{ userInfo.like_count}}</router-link>
        </van-row>
      </div>
      <!-- 已登录 end -->

      <!-- 未登录 -->
      <div class="imageInfo" v-else>
        <van-image class="avatar" round width="67px" height="67px" @click="this.$router.push('/login')"
          src="https://img0.baidu.com/it/u=3770990833,1013306388&fm=26&fmt=auto&gp=0.jpg" />
        <router-link to="/login" tag="a" class="loginText"> 点击登录</router-link>

        <van-row gutter="20" class="warp">
          <router-link tag="van-col" to="/login" span="8">动态</router-link>
          <router-link tag="van-col" to="/login" span="8">关注</router-link>
          <router-link tag="van-col" to="/login" span="8">粉丝</router-link>
          <router-link tag="van-col" to="/login" span="8">历史</router-link>
        </van-row>
      </div>
      <!-- 未登录end -->
      <!-- 顶部登录 -->



      <!-- 其他功能 -->
      <div class="other" v-if="user">
        <van-cell title="个人中心" is-link color="#222" size="large">
          <van-icon slot="icon" color="#222" size="20px" name="wap-home" />
        </van-cell>
        <van-cell title="我的喜欢" is-link size="large">
          <van-icon slot="icon" color="#222" size="20px" name="like" />
        </van-cell>
        <van-cell title="我的收藏" is-link size="large">
          <van-icon slot="icon" color="#222" size="20px" name="star" />
        </van-cell>
        <van-cell title="最新消息" is-link size="large">
          <van-icon slot="icon" color="#222" size="20px" name="comment" />
        </van-cell>
        <van-cell title="机器人" is-link size="large">
          <van-icon slot="icon" color="#222" size="20px" name="smile" />
        </van-cell>
        <van-cell @click="loginExit()" class="logout" title="退出登录" color="red" size="large"> </van-cell>
      </div>

      <div class="other" v-else>
        <van-cell title="观看历史" is-link color="#222" size="large" to="/login">
          <van-icon name="" />
          <van-icon slot="icon" color="#222" size="20px" name="underway" />
        </van-cell>
      </div>
      <!-- 其他功能 -->
    </div>
    <!-- 顶部登录 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  // 引入tabbar公共组件
  import TabBar from '@/components/Tabbar'
  import { Dialog } from 'vant';
  import {
    mapState
  } from 'vuex'

  import { getUserInfo } from '@/api/user'

  export default {
    name: 'contonter',
    data() {
      return {
         userInfo:{}
      }
    },

    computed: {
      ...mapState(["user"])
    },
    components: {
      TabBar,
      [Dialog.Component.name]: Dialog.Component
    },

    created(){
      if(this.user){
        this.loadUserInfo()
      }
    },

    methods:{
      loginExit(){
       Dialog.confirm({
         title: '退出登录',
         message: '您确定要退出登录吗?',
       })
         .then(() => {
           // 成功的方法
           this.$store.commit('setUser',null)
           this.$toast.success('退出成功')
         })
         .catch(() => {
           this.$toast('您取消退出登录了')
         });
      },

      async loadUserInfo(){
        try {
              const { data } = await getUserInfo()
              this.userInfo = data.data
              console.log(this.userInfo)
              // 数据格式化
              const art_count = this.userInfo.art_count.toString()
              if(art_count.length >= 5){
                  const artNumber = art_count.slice(0,1) + "." + art_count.slice(1,2) + "W"
                  return this.userInfo.art_count = artNumber
              }
        } catch(err){
            this.$toast.fail('获取用户信息失败')
            console.log(err,"获取用户信息失败")
        }
      }
    }
  }
</script>


<style scoped lang="less">
  .ask {
    .topNav {
      width: 100%;
      height: 180px;
      border-radius: 0px 0px 20px 20px;
      // background-color: #e6e6e952;
      background-color: white;

      .imageInfo {
        .loginText {
          color: #222;
          font-size: 20px;
          font-weight: 600;
          position: relative;
          bottom: 41px;
          margin-bottom: 30px;
          left: 10px;
        }

        .avatar {
          margin: 31px 0px 13px 12px;
        }

        .warp {
          margin-left: 30px;
          font-size: 18px;
          color: #222;
          font-weight: 550;
          font-family: 'Franklin Gothic Medium';

        }
      }
    }

    .other {
      width: 96%;
      height: 300px;
      padding-top: 30px;
      position: relative;
      top: 50px;
      margin: 0px 10px 0px 10px;
      background-color: white;
      border-radius: 20px 20px 20px 20px;
      font-weight: 550;
      color: #222;
      text-align: center;

      .logout {
        color: #f71e1ee8;
      }
    }
  }
</style>
