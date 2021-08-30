

// 创建用户
export const setItem = ( key , value) =>{

     //将数组或对象格式的数据转换为json格式
     if(typeof value === 'object'){
       value = JSON.stringify(value)
     }
     window.localStorage.setItem(key,value)
}


export const getItem = key =>{
       const data = window.localStorage.getItem(key)
       try {
         // reutrn 要返回出去  不然接收不到
         return JSON.parse(data)
       } catch (err){
          return data
       }
}


export const removeItem = key =>{
     window.localStorage.removeItem(key)
}
