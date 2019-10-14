// pages/chaxun/chaxun.js
const App = getApp();
const http = App.http;
const openId = App.openId;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    InputBottom: 0,
    currentData: 0,
    heights:8*50,
    number:'',
    orderList:[],
  },
  // 复制运单号
  copy:function(e){
    wx.setClipboardData({
      data: 'data',
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },

  InputFocus:function(e){
    this.InputBottom = e.detail.height
  },
  InputBlur:function(e) {
    this.InputBottom = 0
  },
  // 点击扫描
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
  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },

  // 点击投诉
  tousu:function(e){
    wx.navigateTo({
      url: './tousu/tousu',
    })
  },


  del(e) {
    let that = this;
    var orderId = e.currentTarget.dataset.index;
    console.log(orderId);
    wx.showModal({
      content: '是否确认删除？',
      cancelText: '否',
      confirmText: '是',
      success: res => {
        if (res.confirm) {
          wx.request({
            url: http + '/weixin/order/delUserSendOrder',
            data: {
              orderId: orderId
            },
            method: "post",
            header: {
              'Content-Type': 'application/json'
            },
            success: function (res) {
              console.log(res);
              if (res.data.code==1){
                wx.showToast({
                  title: res.data.msg,
                })
                that.onLoad();//刷新页面
              }
            }
          })
          // this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          // this.setData({
          //   imgList: this.data.imgList
          // })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.setNavigationBarTitle({
      title: '查快递'  //修改title
    })
    wx.request({
      url: http + '/weixin/order/getUserSendOrder',
      data: {
        openId: openId,
      },
      method: "post",
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({ orderList: res.data.data})
        /*wx.navigateBack({
          delta: 1
        })*/
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

  },
  /**
   *  运单号查询
   */
  getNumber: function (e) {
    let that = this;
    var val = e.detail.value;
    console.log(val);
    that.setData({
      number: val
    });
  },
  /**
   *  运单号查询
   */
  search: function () {
    let that = this;
    console.log(this.data.number);
    wx.request({
      url: http + '/weixin/order/getNumberSendOrder',
      data: {
        number: this.data.number
      },
      method: "post",
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({ orderList: res.data.data})
        /*wx.navigateBack({
          delta: 1
        })*/
      }
    })
  }
  
})