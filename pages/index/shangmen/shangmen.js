// pages/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: -1,
    picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
  },
  PickerChange(e) {
    this.index = e.detail.value
  },
  // 点击寄件跳转寄件页面
  jijian: function (e) {
    wx.navigateTo({
      url: './jijian/jijian',
    })
  },
  // 点击收件人跳转收件人页面
  shoujian: function (e) {
    wx.navigateTo({
      url: './shoujian/shoujian',
    })
  },
  wupin: function (e) {
    wx.navigateTo({
      url: './wupin/wupin',
    })
  },
  baojia: function (e) {
    wx.navigateTo({
      url: './baojia/baojia',
    })
  },
  zengzhi: function (e) {
    wx.navigateTo({
      url: './zengzhi/zengzhi',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  sender: function (options) {
    wx.navigateTo({
      url: './jijian/jijian',
    })
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '快递员上门'  //修改title
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