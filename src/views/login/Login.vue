<template>
  <div class="login">

    <van-nav-bar class="top_nav" left-text="返回" left-arrow @click-left="onClickLeft" title="登录" />


    <van-form @submit="onSubmit" ref="loginFrom">
      <van-field v-model="user.mobile" name="mobile" label="手机号码" placeholder="请输入手机号" :rules="mountedFrom.mobile"
        type="number" maxlength="11">
        <i slot="left-icon" class="iconSize iconfont icon-icon-test22"></i>
      </van-field>


      <van-field v-model="user.code" type="text" name="code" label="验证码" placeholder="请输入验证码" :rules="mountedFrom.code">
        <i slot="left-icon" class="iconSize iconfont icon-icon-test17"></i>
        <template #button>

          <van-count-down v-if="isTimeShow" millisecond :time="time" format="ss 秒" @finish="isTimeShow=false" />
          <van-button class="btnYzm" v-else size="mini" type="" plain hairline round native-type="button"
            @click="onSendCode">发送验证码</van-button>
        </template>
      </van-field>

      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>


<script>
  import {
    login,
    code
  } from '@/api/user'
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        user: {
          mobile: '',
          code: '',
        },

        // 验证码时间格式
        time: 60 * 1000,

        isTimeShow: false,

        mountedFrom: {
          mobile: [{
              required: true,
              // message: '请填写手机号'
            },
            {
              pattern: /1[3|5|7|8]\d{9}/,
              message: '手机格式不正确'
            }
          ],
          code: [{
              required: true,
              // message: '请填写验证码'
            },

            {
              pattern: /^\d{6}$/,
              message: '验证码格式错误'
            }

          ]
        }

      };
    },
    methods: {

      onClickLeft(){
         this.$router.back()
      },

      async onSubmit() {
        const user = this.user;
        Toast.loading({
          message: '加载中...',
          forbidClick: true,
          duration: 0
        });

        try {
          const res = await login(user);
          this.$toast.success('登陆成功')
          this.$store.commit('setUser', res.data.data);
          this.$router.push('/')
          console.log('登录成功', res)
        } catch (err) {
          if (err.response.status === 400) {
            console.log('验证码错误', err.response.statusText);
            this.$toast.fail('验证码错误')
          } else {
            this.$toast.fail('登录失败')
          }
        }
      },

      // 发送验证码
      async onSendCode() {
        // 检测手机号码
        try {
          await this.$refs.loginFrom.validate('mobile');
          console.log('验证通过')
        } catch (err) {
          return console.log(err, '验证失败,手机号格式错误')
        }
        //发送验证码 倒计时
        this.isTimeShow = true;
        // 发送验证码
        try {
          await code(this.user.mobile);
          console.log("验证成功")
        } catch (err) {
          // this.isTimeShow = false;
          if (err.response.status === 429) {
            this.$toast('操作过于频繁 ，请稍后重试')
          } else {
            this.$toast('发送失败，请稍后重试')
          }
        }

      }


    },
  };
</script>


<style scoped lang="less">
  .login {
  
    .iconSize {
      font-size: 19px;
    }
    .btnYzm {
      padding: 8px;
      background-color: #e4e1e138;
    }
  }
</style>
