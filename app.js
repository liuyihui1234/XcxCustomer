App({
  onLaunch: function () {
    //获取设备信息
    const self = this;
    wx.getSystemInfo({
      success(res) {
        self.systemInfo = res;
      },
    });
  },
  //http: '',
   http:'http://192.168.1.191:8081',
  openId:"oa8tD0aijnZprPCG759mI-H0mcJE",
  globalData: {
    userInfo: null
  },
  onPullDownRefresh: function () {
    console.log('-----------')
    // 显示顶部刷新图标  
    // wx.showNavigationBarLoading();
    // 隐藏导航栏加载框  
    wx.hideNavigationBarLoading();
    // 停止下拉动作  
    wx.stopPullDownRefresh();

  }
})