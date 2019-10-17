// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    find_navs:[
      {
        find_nav_id:1,
        img: "../.././images/find_wangdian.png",
        text: "网点查询"
      },
      {
        find_nav_id: 2,
        img: "../.././images/find_weijin.png",
        text: "违禁品查询"
      },
      {
        find_nav_id: 3,
        img: "../.././images/find_yunfei.png",
        text: "运费时效"
      },
      {
        find_nav_id: 4,
        img: "../.././images/find_serve.png",
        text: "服务范围"
      },
    ],
    find_banner:"../.././images/find_banner.png",
    find_banner2:"../.././images/find_banner2.png"
  },
  getFindNav:function(e){
    console.log(e);
    var find_nav_id = e.currentTarget.dataset.find_nav_id
    if (find_nav_id == 1){
      //contraband违禁品
      wx.navigateTo({
        url: './find_wangdian/find_wangdian',
      })
    } else if (find_nav_id == 2){
      //contraband违禁品
      wx.navigateTo({
        url: './find_weijin/find_weijin',
      })
    } else if (find_nav_id == 3) {
      //contraband违禁品
      wx.navigateTo({
        url: './find_yunfei/find_yunfei',
      })
    } else if (find_nav_id == 4) {
      //contraband违禁品
      wx.navigateTo({
        url: './find_serve/find_serve',
      })
    }
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