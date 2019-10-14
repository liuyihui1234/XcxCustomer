// pages/index/shangmen/address_book/address_book.js
const App = getApp();
const http = App.http;
const openId = App.openId;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    type:"",
  },
  new_add_address: function (e) {
    wx.navigateTo({
      url: '../../../my/address/new_add_address/new_add_address',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var type = options.type;
    var that = this;
    that.setData({
      type: type
    })
    console.log(type);
    wx.setNavigationBarTitle({
      title: '地址簿'  //修改title
    })
    wx.request({
      url: http + '/weixin/address/myAddressList',
      data: {
        type: type,
        openId: openId
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);
        that.setData({
          list: res.data.data
        })
      }
    })
  },
  del(e) {
    let that = this;
    var id = e.currentTarget.dataset.index;
    console.log(id);
    wx.showModal({
      content: '是否确认删除？',
      cancelText: '否',
      confirmText: '是',
      success: res => {
        if (res.confirm) {
          wx.request({
            url: http + '/weixin/address/delAddress',
            data: {
              id: id
            },
            method: "POST",
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
              console.log(res);
              if (res.data.code == 1) {
                wx.showToast({
                  title: res.data.msg,
                })
                that.onLoad({
                  type: that.data.type
                });//刷新页面
              }
            }
          })
        }
      }
    })
  },

  selectAddress:function(e){
    let that = this;
    var id = e.currentTarget.dataset.index;
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    wx.request({
      url: http + '/weixin/address/getAddress',
      data: {
        id: id
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data.data);
        if (res.data.code == 1) {
          if (that.data.type == 0) {//寄件人
            prevPage.setData({
              fromname: res.data.data.contactname,
              fromprovince: res.data.data.provincecode,
              fromprovincename: res.data.data.province,
              fromcityname: res.data.data.city,
              fromcity: res.data.data.citycode,
              fromareaname: res.data.data.county,
              fromarea: res.data.data.countycode,
              fromareastreetname: res.data.data.areastreet,
              fromareastreet: res.data.data.areastreetcode,
              fromaddress: res.data.data.address,
              fromtel: res.data.data.contactphone,
              fromcode: res.data.data.provincecode
            });
          }
          if (that.data.type == 1) {//寄件人
            prevPage.setData({
              toname: res.data.data.contactname,
              toprovince: res.data.data.provincecode,
              toprovincename: res.data.data.province,
              tocityname: res.data.data.city,
              tocity: res.data.data.citycode,
              toareaname: res.data.data.county,
              toarea: res.data.data.countycode,
              toareastreetname: res.data.data.areastreet,
              toareastreet: res.data.data.areastreetcode,
              toaddress: res.data.data.address,
              totel: res.data.data.contactphone,
              tocode: res.data.data.provincecode
            });
            console.log(prevPage.data);
          }
          wx.navigateBack({
            delta: 1
          })
        }
      }
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