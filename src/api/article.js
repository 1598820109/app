
import request from '@/utils/request'

// 获取文章列表接口
export const articleListData = params =>{
   return request({
     method:'GET',
     url:'app/v1_1/articles',
     params
   })
}
