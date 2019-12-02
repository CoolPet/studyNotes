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

- Initialization(初始化过程)
  - 初始化数据和组件(相当于 React 中的 constructor,虽说 constructor 虽然属于 ES6 的语法,但是也相当于 React 的声明周期)
- Mounting(挂载过程)
  - componentWillMount:在组件即将被挂载到页面的时刻自动执行
  - render:页面挂载
  - componentDidMount:在组件被挂载到页面之后自动执行
- Updation(更新时刻)
  - props(组件)
    - componentWillReceiveProps:当一个组件从父组件接受参数,只要父组件的 render 函数被执行,子组件的这个生命周期函数就会被自动执行
      - 如果这个组件第一次存在于父组件中,不会执行
      - 如果这个组件之前已经存在于父组件中,才会执行
    - shouldComponentUpdate:组件被更新之前,它会自动被执行
    - componentWillUpdate:组件被更新之前,它会自动执行,但是在 shouldComponentUpdate 之后被执行
      - 如果 shouldComponentUpdate 返回 true,它才执行,否则反之 
    - render:页面挂载
    - componentDidUpdate:组件更新完成之后自动执行
  - states(数据)
    - shouldComponentUpdate:组件被更新之前,它会自动被执行
    - componentWillUpdate:组件被更新之前,它会自动执行,但是在 shouldComponentUpdate 之后被执行
      - 如果 shouldComponentUpdate 返回 true,它才执行,否则反之 
    - render:页面挂载
    - componentDidUpdate:组件更新完成之后自动执行
- Unmounting(解除挂载)
  - componentWillUnmount:当组件即将被从页面中剔除的时候自动执行
  
<img src="./笔记的图片/React的生命周期.png">