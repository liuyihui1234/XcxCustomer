// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    find_navs:[
      {
        img: "../.././images/find_wangdian.png",
        text: "网点查询"
      },
      {
        img: "../.././images/find_weijin.png",
        text: "违禁品查询"
      },
      {
        img: "../.././images/find_yunfei.png",
        text: "运费时效"
      },
      {
        img: "../.././images/find_serve.png",
        text: "服务范围"
      },
    ],
    find_banner:"../.././images/find_banner.png",
    find_banner2:"../.././images/find_banner2.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '发现'  //修改title
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

})