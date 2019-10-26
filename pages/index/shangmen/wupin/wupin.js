// pages/index/shangmen/wupin/wupin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 1,
    imgList: [],
    textareaAInput: '',
    textareaAValue: '',
    // 寄大件物品信息按钮
    switchB: true,
    hiddenName: true,
    volume_count:0.00
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      nav_id: options.nav_id
    })
    console.log(this.data.nav_id)
    wx.setNavigationBarTitle({
      title: '物品信息'  //修改title
    })
  },
  // 预估重量
  button_reduce(e){
    let count = --this.data.count;
    this.setData({
      count: count
    })
    // console.log(this.data.count)
  },
  button_add(e) {
    let count = ++this.data.count;
    this.setData({
      count: count
    })
    // console.log(this.data.count)
  },
  ChooseImage() {
    wx.chooseImage({
      count: 5, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '召唤师',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  // 给小哥捎句话吧
  textareaAInput(e) {
    // this.textareaAValue = e.detail.value
    this.setData({
      textareaAValue: e.detail.value
    })
    // console.log(this.data.textareaAValue)
  },


  // 寄大件物品信息按钮事件
  SwitchB(e) {
    this.switchB = e.detail.value
    this.setData({
      hiddenName: !this.data.hiddenName
    })
  },
  // 预估重量
  volume_button_reduce(e) {
    let volume_count = --this.data.volume_count;
    this.setData({
      volume_count: volume_count
    })
    // console.log(this.data.count)
  },
  volume_button_add(e) {
    let volume_count = ++this.data.volume_count;
    this.setData({
      volume_count: volume_count
    })
    // console.log(this.data.count)
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