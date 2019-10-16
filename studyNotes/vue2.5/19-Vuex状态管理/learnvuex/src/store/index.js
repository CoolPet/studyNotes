import Vue from "vue"
import Vuex from "vuex"

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state:{
    counter: 10,
    students:[
      {id: 110, name: "why", age: 18},
      {id: 111, name: "koby", age: 20},
      {id: 112, name: "james", age: 24},
      {id: 113, name: "jack", age: 30}
    ],
    info:{
      name: "kobe",
      age: 40,
      height: 1.98
    }
  },
  mutations:{
    // 方法
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    incrementCount(state, count){
      // 1.普通的提交封装
      // state.counter += count

      // 2.特殊的提交封装
      console.log(count)
      state.counter += count.count
    },
    upinfo(state){
      state.info.name = "coderwhy"
      Vue.set(state.info, "address", "洛杉矶")
    }
  },
  actions:{
    // context:上下文
    aUpdateInfo(context){
      setTimeout(() => {
        context.commit("upinfo")
      },1000)
    }
  },
  getters:{
    powerCounter(state){
      return state.counter * state.counter
    },
    small20stu(state){
      return state.students.filter(s => {
        return s.age <= 20
      })
    },
    small20stuLength(sate, getters){
      return getters.small20stu.length
    },
    moreAgeStu(state){
      return function(age){
        return state.students.filter(s => s.age <= age)
      }
    }
  },
  modules:{

  }
})

// 3.导出 store 独享
export default store