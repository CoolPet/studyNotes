import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutation-types"

export default {
  // mutations 唯一的目的就是修改 state 中状态
  // mutations 中的每个方法尽可能完成的事件比较单一一点 ————— 设计原则
  // addCart(state, payload){
    // 1.使用 for 循环判断新添加的商品是否存在
    // let oldProduct = null
    // for(let item of state.cartList){
    //   if(item.iid === payload.iid){
    //     oldProduct = item
    //   }
    // }
    // 2.使用 find 函数查找商品是否存在
    // let oldProduct = state.cartList.find(item => item.iid === payload.iid)

    // 2.判断 oldProduct 是否为空,如果为空,则商品不存在,否则反之
    // if(oldProduct){
    //   oldProduct.count +=1
    // }else{
    //   payload.count = 1
    //   state.cartList.push(payload)
    // }
    // console.log(state.cartList)
  // }
  [ADD_COUNTER](state, payload){
    payload.count ++
  },
  [ADD_TO_CART](state, payload){
    payload.checked = true
    state.cartList.push(payload)
  }
}