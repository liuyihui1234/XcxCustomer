const App = getApp();
Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    var that = this;
    // 查看是否授权
  //   wx.getSetting({
  //     success: function (res) {
  //       if (res.authSetting['scope.userInfo']) {
  //         wx.getUserInfo({
  //           success: function (res) {
  //             //从数据库获取用户信息
  //             console.log(res)
  //             that.queryUsreInfo();
  //             // 用户已经授权过
  //             wx.switchTab({
  //               url: '/pages/index/index'
  //             })
  //           }
  //         });
  //       }
  //     }
  //   })
  },
  bindGetUserInfo: function (e) {
    var http = App.http;
    if (e.detail.userInfo) {
      wx.login({
        success: res => {
          var resCode = res;
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          wx.getUserInfo({
            success: res => {
              var userInfo = res.userInfo;
              console.log(resCode.code, res.iv, res.iv)
              
              wx.request({
                url: http + '/weixin/wechatUser/auth',
                data: {
                  code: resCode.code,
                  // nickname: res.userInfo.nickName,
                  // avatorUrl: res.userInfo.avatarUrl
                  encryptedData: res.encryptedData, iv: res.iv
                },
                method: "POST",
                header: {
                  'content-type': 'application/json;charset=UTF-8'
                },
                success: function (res) {
                  console.log(res);
                  var str = res.data.data;
                  console.log(res);
                  // console.log("str",str);
                  // console.log("openid=" + str.openid);
                  wx.setStorageSync('userInfo', str);
                  wx.setStorageSync('openId', str.openid);
                  wx.navigateBack({
                    delta: 1
                  })
                }
              })
            },
            fail: function () {
              console.log("用户信息获取失败：")
              wx.navigateBack({
                delta: 1
              })
            }
          })
        }
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },
})

/*Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo.nickName)
    var userInfo = e.detail.userInfo;
    wx.request({
      url: App.http + '/api/common/index/getSlideList',
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {
        openId: e.detail.userInfo.nickName
      },
      success: function (res) {
        // console.log(res)
        that.setData({
          imgUrls: res.data.data
        })
      }
    })
  }
})*/