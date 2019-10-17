// pages/find/find_yunfei/find_yunfei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picker: ['09:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00', '18:00-19:00', '19:00-20:00'],
    // tabBarNav:[
    //   {
    //     tab_nav_id: 1,
    //     tab_bar_nav: '快递'
    //   },
    //   {
    //     tab_nav_id: 2,
    //     tab_bar_nav: '大件'
    //   },
    //   {
    //     tab_nav_id: 3,
    //     tab_bar_nav: '冷运'
    //   }
    // ],
    // TabCur: '',
    // scrollLeft: 0
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
  // 滑块q切换
  // tabSelect(e) {
  //   this.setData({
  //     TabCur: e.currentTarget.dataset.id,
  //     scrollLeft: (e.currentTarget.dataset.id - 1) * 60
  //   })
  // },
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