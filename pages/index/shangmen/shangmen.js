// pages/order.js

const App = getApp();
const http = App.http;
const openId = App.openId;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: -1,
    picker: ['09:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00',  '17:00-18:00', '18:00-19:00', '19:00-20:00'],

      fromname:'',
      fromprovince: '',
      fromprovincename: '',
      fromcityname: '',
      fromcity: '',
      fromareaname: '',
      fromarea: '',
      fromareastreetname: '',
      fromareastreet:'',
      fromaddress: '',
      fromtel: '',
      fromcode: '',

      toprovince: '',
      toprovincename: '',
      tocity: '',
      tocityname: '',
      toarea: '',
      toareaname: '',
      toareastreet: '',
      toareastreetname: '',
      toaddress: '',
      toname: '',
      tocode: '',
      totel: ''
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
      url: './jijian/jijian',
    })
  },
  // 点击收件人跳转收件人页面
  shoujian: function (e) {
    wx.navigateTo({
      url: './shoujian/shoujian',
    })
  },
  address_book:function(e){
    console.log(e.currentTarget.dataset.index);
    wx.navigateTo({
      url: './address_book/address_book?type=' + e.currentTarget.dataset.index,
    })
  },
  submitCreateForm:function(){
    var that = this;
    wx.request({
      url: http + '/weixin/appoitment/addAppointment',
      data: {
        fromsystem:'WEIXIN',
        openId: openId,
        fromname: that.data.fromname,
        fromprovince: that.data.fromprovince,
        fromprovincename: that.data.fromprovincename,
        fromcityname: that.data.fromcityname,
        fromcity: that.data.fromcity,
        fromareaname: that.data.fromareaname,
        fromarea: that.data.fromarea,
        fromareastreetname: that.data.fromareastreetname,
        fromareastreet: that.data.fromareastreet,
        fromaddress: that.data.fromaddress,
        fromtel: that.data.fromtel,
        fromcode: that.data.fromcode,
        ovtime: that.data.picker[that.data.index],
        toprovince: that.data.toprovince,
        toprovincename: that.data.toprovincename,
        tocity: that.data.tocity,
        tocityname: that.data.tocityname,
        toarea: that.data.toarea,
        toareaname: that.data.toareaname,
        toareastreet: that.data.toareastreet,
        toareastreetname: that.data.toareastreetname,
        toaddress: that.data.toaddress,
        toname: that.data.toname,
        tocode: that.data.tocode,
        totel: that.data.totel
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);
        if(res.data.code==1){
          wx.showToast({
            title: res.data.msg,
          })
          setTimeout(function () {
           
            wx.reLaunch({
              url: '../index'
            })
          }, 3000)
        }
      }
    })
  },
  wupin: function (e) {
    console.log(e)
    let datalst = e.currentTarget.dataset.shang;
    console.log(datalst);
    wx.navigateTo({
      url: './wupin/wupin?nav_id='+datalst,
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
    // console.log(options)
    wx.navigateTo({
      url: './jijian/jijian',
    })
  },

  onLoad: function (options) {
    console.log(options)
    this.setData({
      nav_id: options.nav_id
    })
    console.log(this.data.nav_id)
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