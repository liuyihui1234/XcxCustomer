// pages/index/shangmen/zengzhi/zengzhi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalName1: null,
    modalName2: null,
  },
  baojia_showModal(e) {
    this.setData({
      modalName1: "baojia_Modal"
    })
  },
  rucang_showModal(e) {
    this.setData({
      modalName2: "rucang_Modal"
    })
  },
  hideModal(e) {
    this.setData({
      modalName1: "null",
      modalName2: "null",      
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '增值服务'  //修改title
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