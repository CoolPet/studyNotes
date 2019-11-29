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