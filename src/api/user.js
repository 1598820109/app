
import request from '@/utils/request'
// import store from '@/store'

// 登录接口
export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}

// 验证码接口 每个手机号每分钟只能发送一次
export const code = mobile =>{
  return request({
      method: 'GET',
      url: `/app/v1_0/sms/codes/${mobile}`,
  })
}

// 获取用户数据
export const getUserInfo = data =>{
   return request({
      method:'GET',
      url:'/app/v1_0/user'
      // headers:{
      //   Authorization: `Bearer ${store.state.user.token}`
      // }
   })
}

// 获取频道数据接口
export const getChannels = data =>{
   return request({
     method:'GET',
     url:'/app/v1_0/channels',
     data
   })
}

// 获取文章列表接口
export const articleList = data=>{
   return request({
     method:'GET',
     url:'/app/v1_0/mp/articles',
     data
   })
}
