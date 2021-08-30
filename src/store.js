import Vue from 'vue'
import Vuex from 'vuex'
import { setItem , getItem } from '@/utils/state'

Vue.use(Vuex)

const TOKEN_KEY = 'USER_TOKEN'

export default new Vuex.Store({
  state: {
       // 储存当前用户登录的token
       // user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
       user: getItem(TOKEN_KEY)
  },
  mutations: {
      setUser (state,data){
          state.user = data

          // 本地储存用户token
          setItem(TOKEN_KEY,state.user)
          // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
      }
  },
  actions: {

  }
})
