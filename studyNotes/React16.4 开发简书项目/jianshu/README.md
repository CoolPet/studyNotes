### React 开发简书项目

- ``` styled-components ```
  - ``` styled ``` 用于定义各个组件中样式的定义
  - ``` createGlobalStyle ``` 用于定义统一样式的定义
- ``` react-router-dom ```
  - ``` HashRouter ``` 代表的是路由
  - ``` Route ``` 代表的是路由规则,在 ``` Route ``` 上加 ``` exact ``` 可以进行路径的完全匹配判断,只有路径完全一致才显示,否则不显示
- ``` immutable ```
  - ``` fromJS ``` 将纯 JS 对象和数组深层转换为不可变映射和列表
  - ``` toJS ``` 使一个 immutable 对象数组变为正常的对象数组
  - 改变数据的时候用 set(key, value) 或者 merge({key1: value1, key2: value2})
- ``` redux ```
  - ``` createStore ``` 创建一个 redux 的存储,其中包含应用程序的完整状态树
  - ``` applyMiddleware ``` 扩展 redux 的一种方式
  - ``` compose ``` 从右到左来组合多个函数
- ``` reducer ``` 纯函数,一种归约函数,返回给定当前状态树和要处理的动作的下一个状态树
- ``` redux-thunk ``` redux 中间件
  - ``` thunk ```
- ``` redux-immutable ``` 统一数据格式
  - ``` combineReducers ``` 创建一个统一整合的 ``` immutable ``` 对象
  - 获取数据的时候用 get(key, value) 或者 getIn([key, value])