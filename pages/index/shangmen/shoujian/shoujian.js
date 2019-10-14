// pages/manage/sender_detail/sender_detail.js
var bmap = require('../../../.././libs/bmap-wx.min.js');
Page({
  data: {
    customItem: '',
    picker: ['喵喵喵', '汪汪汪', '哼唧哼唧']
  },
  PickerChange(e) {
    this.index = e.detail.value
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // 点击跳转我的地址
  address_book: function (e) {
    wx.navigateTo({
      url: '../address_book/address_book',
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '收件人地址填写'  //修改title
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