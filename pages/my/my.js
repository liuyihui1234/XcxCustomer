// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalName: null,
    my_imgs: [
      {
        my_imgs_id: 1,
        img: "../.././images/my_img1.png",
        text: "地址簿"
      },
      { 
        my_imgs_id: 2,
        img: "../.././images/my_img2.png",
        text: "优惠券"
      },
      {
        my_imgs_id: 3,
        img: "../.././images/my_img3.png",
        text: "发票申请"
      },
      {
        my_imgs_id: 4,
        img: "../.././images/my_img4.png",
        text: "购物订单"
      },
    ]
  },
  // 地址簿 优惠券 发票申请 购物订单
  my_imgs:function(e){
    console.log(e)
    var my_imgs_id = e.currentTarget.dataset.my_imgs_id
      console.log(my_imgs_id)
    if (my_imgs_id == 1) {
      wx.navigateTo({
        url: './address/address',
      })
    } else if (my_imgs_id == 2){
      wx.navigateTo({
        url: './youhui/youhui',
      })
    } else if (my_imgs_id == 3) {
      wx.navigateTo({
        url: './fapiao/fapiao',
      })
    } else if (my_imgs_id == 4) {
      wx.navigateTo({
        url: './shopping/shopping',
      })
    }
  },

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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的'  //修改title
    })
  },
  my_jifen: function (e) {
    wx.navigateTo({
      url: './my_jifen/my_jifen',
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