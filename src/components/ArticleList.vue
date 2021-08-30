<template>
  <div class="wenzhang">
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="loadArticleList"
    >
      <van-cell v-for="(article,index) in itemlist"  :key="index" :title="article.title" />
    </van-list>
  </div>
</template>

<script>
import { articleListData } from '@/api/article'
  export default {
    name: 'articles',
    props: {
      item: {
        type: Object,
        required: true

      }
    },

    data() {
      return {
        timestamp:null,
        itemlist:[],
        finished:false,
        loading:false,
        error:false
        }
      },

      created() {
        this.loadArticleList()
      },

      methods: {
          async loadArticleList() {
            try{
                const { data } = await articleListData({
                        channel_id: this.item.id,
                        timestamp: this.timestamp || Date.now(),
                        with_top:1
                })

                const { results } = data.data
                this.itemlist.push(...results)
                this.loading = false
                console.log(data)
                // 更新下一页数据
                if( results.length){
                   this.timestamp = data.data.pre_timestamp
                }else{
                  this.finished = true
                }

            } catch (err){
                this.error = true
                this.loading = false
                this.$toast.fail('数据加载失败，点击刷新')
            }
          },
       }
    }
  </script>
