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
  http:'http://127.0.0.1:8081/',
  openId: wx.getStorageSync('openId'),
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