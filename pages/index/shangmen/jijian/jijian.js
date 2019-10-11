// pages/manage/sender_detail/sender_detail.js
var bmap = require('../../../.././libs/bmap-wx.min.js');
Page({
  data: {
    region:[],
    customItem: '',
    picker: ['喵喵喵', '汪汪汪', '哼唧哼唧']
  },
  PickerChange(e) {
    this.index = e.detail.value
  },
  /**
   * 生命周期函数--监听页面加载
   */
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  getAddress: function(latitude, longitude){
    var that = this;
    var url = "https://api.map.baidu.com/geocoder/v2/";
    var params = {
      ak: "bhgtBaRaq84Zc7Zmml8icfITWe0OpqRP",//免费去百度地图上申请一个
      output: "json",
      location: latitude + "," + longitude,
    }
    wx.request({
      url: url,
      data: params,
      success: function (res) {
        // console.log(res)
        // that.setData({
        //   nowlocation: res.data.result.formatted_address,
        // })
      },
    })
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
      }
    })
    wx.chooseLocation({
      success: function(res) {
        // console.log(res)
        const address = res.address
        // console.log(address)
      },
    })
    var BMap = new bmap.BMapWX({
      ak: 'bhgtBaRaq84Zc7Zmml8icfITWe0OpqRP'
    })
      var that =this
    BMap.regeocoding({
      success: function (res) {
        console.log(res)
        const province = res.originalData.result.addressComponent.province
        // console.log(province)
        const city = res.originalData.result.addressComponent.city
        // console.log(city)
        const district = res.originalData.result.addressComponent.district
        // console.log(district)
        that.setData({
          region: [province,city,district]
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })

  },
  // 点击跳转我的地址
  address_book:function(e){
    wx.navigateTo({
      url: '../address_book/address_book',
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '寄件人地址填写'  //修改title
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