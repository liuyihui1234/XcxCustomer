// pages/my/fapiao/fapiao_apply_info/fapiao_apply_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    email:true,
    hiddenName:true
  },
  // 点击发送邮箱 是
  radio_yes:function(e){
    this.setData({
      email:!this.data.email
    })
  },
  // 点击发送邮箱 否
  radio_no:function(e){
    this.setData({
      email: this.data.email
    })
  },
  // 点击更多信息的下拉框
  more_info_up:function(e){
    this.setData({
      hiddenName: !this.data.hiddenName
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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