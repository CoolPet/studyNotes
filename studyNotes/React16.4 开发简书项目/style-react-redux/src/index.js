import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./TodoList"
import { Provider } from "react-redux"
import store from "./store"

const App = (
  // conner 方法生成容器组件后,需要让容器组件拿到 state 对象,才能生成 UI 组件的参数
  // react-redux 提供 Provider 组件,可以让容器组件拿到 store 中的 state
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));