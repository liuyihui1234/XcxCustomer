// pages/manage/sender_detail/sender_detail.js
Page({
  data:{
    scanCodeMsg: "",
    multiArray: [
      ['今天', '明天','后天'],
      ['一小时内', '08：00-09：00', '09:00-10:00', '10:00-11:00', '11:00-12:00'],
    ],
    objectMultiArray: [
      [{
        id: 0,
        name: '今天'
      },
      {
        id: 1,
        name: '明天'
      },
      {
        id: 2,
        name: '后天'
      }
      ],
      [{
        id: 0,
        name: '一小时内'
      },
      {
        id: 1,
        name: '08：00-09：00'
      },
      {
        id: 2,
        name: '09:00-10:00'
      },
      {
        id: 3,
        name: '10:00-11:00'
      },
      {
        id: 4,
        name: '11:00-12:00'
      }
      ],
    ],
    multiIndex: [0, 0],
  },
  scanCode: function () {
    var that = this;
    wx.scanCode({ //扫描API
      success(res) { //扫描成功
        console.log(res) //输出回调信息
        that.setData({
          scanCodeMsg: res.result
        });
        wx.showToast({
          title: '成功',
          duration: 1000
        })
      }
    })
  },
  MultiChange(e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
  MultiColumnChange(e) {
    let data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[0] = ['一小时内', '08：00-09：00', '09:00-10:00', '10:00-11:00', '11:00-12:00'];
            break;
          case 1:
            data.multiArray[1] = ['一小时内', '08：00-09：00', '09:00-10:00'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
    }
    this.setData(data);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getAddress: function (){
      var that= this;
    wx.getLocation({
      success(res){
      that.setData({
        latitude: res.latitude,//经度
        longitude: res.longitude//纬度
      })
        wx.request({
          url:"http://api.map.baidu.com/api?v=2.0",
          data:{
            ak:"8pLRUNgTcIpUAk8pYnqvoEKwwXlh5az7",
            location: that.data.latitude + ',' + that.data.longitude,
          },
          success: function (res) {
            that.setData({
              locationString: res.originalData.result.formatted_address
            })
          },
          fail: function () {
            wx.showToast({
              title: '请检查位置服务是否开启',
            })
          },
        })
      }
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