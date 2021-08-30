<template>
    <div class="ask">
      <h1>问答</h1>
      <tab-bar></tab-bar>
    </div>
</template>


<script>
  // 引入tabbar公共组件
import TabBar from '@/components/Tabbar'

export default{
    name:'contonter',
    data(){
      return{
      }
    },

    components:{
       TabBar
    }

}
</script>
