//app.js
var QQMapWX = require('./lib/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
  key: 'S6FBZ-224WU-MVWVF-BUXXD-W6HM6-VMFAX'
});
App({
  onLaunch: function () {
    // 展示本地存储能力
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        // 将地址信息存储到本地缓存
        wx.setStorageSync('lat', res.latitude)
        wx.setStorageSync('log', res.longitude)
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (res) {//成功后的回调
            wx.setStorageSync('address', res.result)
          }
        })
      }
    })
    // 用户登录获取code
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           console.log(res)
    //         }
    //       })
    //     }
    //   }
    // })
    if(wx.getStorageSync("userInfo")==""){
      wx.reLaunch({
        url: '/pages/login/login'
      })
    }else{
      wx.reLaunch({
        url: '/pages/home/home'
      })
    }
  },
  globalData: {
    userInfo: null
  }
})