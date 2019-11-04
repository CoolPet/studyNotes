// component/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    // 底部导航栏留白位置
    spacer: Number
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tab(){
      const getSystemInfo = wx.getSystemInfoSync()
      console.log(getSystemInfo.windowHeight)
      console.log(getSystemInfo.screenHeight)
    }
  }
})
