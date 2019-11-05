// pages/find/find_yunfei/find_yunfei.js
    const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    picker: ['09:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00', '18:00-19:00', '19:00-20:00'],
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    tabNav: ['快递', '大件', '冷运'],
    // 点击查询显示
    query_block: true,
    hiddenName: true
  },
  PickerChange(e) {
    var that = this;
    that.setData({
      index: e.detail.value
    })
  },
  // 弹窗
  showModal(e) {
    this.setData({
      modalName: "Modal"
    })
  },
  hideModal(e) {
    this.setData({
      modalName: "null"
    })
  },
  isShow:function(e){
    this.setData({
      query_block: "block"
    })
  },
  // 滑块切换
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  isShow:function(e){
    this.setData({
      query_block: !this.data.query_block
    })
  },
  yunfei_rule: function (e) {
    this.setData({
      hiddenName: !this.data.hiddenName
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '运费及时效查询',
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