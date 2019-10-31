// pages/index/shangmen/batch_jijian/batch_jijian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: -1,
    picker: ['09:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00', '18:00-19:00', '19:00-20:00']
  },
  PickerChange(e) {
    var that = this;
    that.setData({
      index: e.detail.value
    })
  },
  // 点击寄件跳转寄件页面
  jijian: function (e) {
    wx.navigateTo({
      url: '../shangmen/jijian/jijian',
    })
  },
  // 点击收件人跳转收件人页面
  shoujian: function (e) {
    wx.navigateTo({
      url: '../shangmen/address_book/address_book',
    })
  },
  address_book: function (e) {
    console.log(e.currentTarget.dataset.index);
    wx.navigateTo({
      url: '../shangmen/address_book/address_book?type=' + e.currentTarget.dataset.index,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '批量寄',
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