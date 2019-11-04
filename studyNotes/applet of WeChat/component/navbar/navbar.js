Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    addGlobalClass: true  // 带上classs
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    // 状态栏高度
    statusBar: Number,
    // 自定义导航栏高度
    navigationBar: Number,
    // 预留胶囊的位置
    capsuleWidth: Number,
    address: wx.getStorageSync("address").address_component.city
  },

  /**
   * 组件的方法列表
   */
  methods: {
    nav() {
      // 获取系统信息
      const getSystemInfo = wx.getSystemInfoSync()
      // console.log(getSystemInfo)
      // 获取右上角胶囊信息
      const rect = wx.getMenuButtonBoundingClientRect()
      let capsuleWidth = getSystemInfo.screenWidth - rect.right + rect.width
      let navigationBar = (rect.top - getSystemInfo.statusBarHeight) * 2 + rect.height
      this.setData({
        statusBar: getSystemInfo.statusBarHeight,
        navigationBar,
        capsuleWidth
      })
    }
  }
})
