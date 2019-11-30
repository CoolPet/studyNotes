## [React](https://www.reactjscn.com/)

- React 的简介
  - React 是 Facebook 推出的
  - 2013 年开源
  - 函数式编程
  - 声名式开发
  - 可以与其他框架并存
  - 组件化
  - 单向数据流
  - 视图层框架
  - 使用人数最多的前端框架
  - 健全的文档与完善的社区
  - react16 版本即之后被称为"React Fiber"
- React 的开发环境准备
  - 引入 js 文件使用 React
  - 通过脚手架工具来编码
  - create-react-app
- React 的语法与注意点
  - React 中有一个 immutable 的概念: state 不允许做任何的改变
  - 在函数中,如果想改变 state 中的数据内容,需要使用 this.setState({key: value})
  - 调用函数的时候要使用 bind(this) 绑定 this 指向,如果没有绑定 this 指向的话, this 的指向为 undefined
  - React 的数据循环要给每一项唯一一个 key 标识符
  - React 中数据渲染,使用 map()
  
    ```

      dangerouslySetInnerHTMl 是React标签的一个属性,相当于 v-html
      {{}}，第一{}代表jsx语法开始，第二个是代表dangerouslySetInnerHTML接收的是一个对象值对
      既可以插入DOM，又可以插入字符串
      写法: dangerouslySetInnerHTML={{__html: 需要解析的数据}}

    ```
  - label 标签的 for 标签需要替换成 htmlFor 
- React 中的虚拟 DOM 
  - 先定义 state 数据
  - 再定义 JSX 模板
  - state 数据 + JSX 模板结合,生成虚拟 DOM (虚拟 DOM 就是一个 JS 对象,用它来描述真实的 DOM)
  - 用虚拟 DOM 的结构生成真实的 DOM,来显示
  - state 发生变化
  - 数据 + 模板生成新的虚拟 DOM 
  - 比较原始虚拟 DOM 和新的虚拟 DOM 的区别,找到区别
  - 直接操作 DOM,改变变更的内容

### React 的生命周期

> 生命周期函数指在某一个时刻组件会自动调用执行的函数

- componentWillMount: 在组件即将被挂载到页面的时刻自动执行
- componentDidMount: 在组件被挂载到页面之后自动执行