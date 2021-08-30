<<<<<<< HEAD
import axios  from 'axios';

const request = axios.create({
  baseURL:"https://cnodejs.org/api/v1/topic/"
})

export default request;
=======
import axios from 'axios'
import store from '@/store'

const request = axios.create({
   baseURL:'http://ttapi.research.itcast.cn'
})

// axios 拦截器
request.interceptors.request.use(function (config) {
  // 如果用户登陆了并且有token
  const { user } = store.state
   if(user && user.token ){
     config.headers.Authorization = `Bearer ${user.token}`
   }
   // 切记： 务必返回config ， 否则请求停在这里出不去
    return config;
  }, function (error) {
    // 还没发送就报错了
    return Promise.reject(error)
  });


export default request
>>>>>>> 第三次更新
