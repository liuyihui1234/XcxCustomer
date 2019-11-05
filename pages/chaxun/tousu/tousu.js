// pages/chaxun/tousu/tousu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tousuPro:[
      {
        img: "../../../images/yanwu.png",
        text: "快递延误"
      },
      {
        img: "../../../images/sunhuai.png",
        text: "损坏/丢失"
      },
      {
        img: "../../../images/feibenren.png",
        text: "非本人签收"
      },
      {
        img: "../../../images/atitu.png",
        text: "服务态度差"
      },
      {
        img: "../../../images/charge.png",
        text: "收费问题"
      },
      {
        img: "../../../images/other_problem.png",
        text: "其他问题"
      }
    ]
  },
  tousu_details:function(e){
    wx.navigateTo({
      url: './tousu_details/tousu_details',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '快递投诉'  //修改title
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