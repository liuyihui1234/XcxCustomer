// pages/manage/sender_detail/sender_detail.js
import WxValidate from '../../../../utils/WxValidate'
var bmap = require('../../../.././libs/bmap-wx.min.js');
const App = getApp();
const http = App.http;
const openId = App.openId;
Page({
  data: {
    contactname: '',//寄件人姓名
    contacttel: '',//座机号
    sheetCode: '',
    province: '',//省份
    provincecode: '',//省code
    sheetContent: '',
    city: '',//市
    citycode: '',//市code
    county: '',//区
    countycode: '',//区code
    areastreet: '',//街道
    areastreetcode: '',//街道code
    address: '',//详细地址
    postcode: '',//邮政编码
    type: '',//1 : 默认地址， 0 ： 非默认地址
    contactphone: '',//联系人手机号
    countrycode: '',//国家编号
    sheet: [],
    region: [],
    // region: ['广东省', '广州市', '海珠区'],
    customItem: '',
    sheetName: []
  },
  PickerChange(e) {
    this.index = e.detail.value
  },
  /**
   * 生命周期函数--监听页面加载
   */
  bindRegionChange: function (e) {
    let that = this;
    console.log('picker发送选择改变，携带值为', e.detail)
    this.setData({
      region: e.detail.value,
      province: e.detail.value[0],//省份
      provincecode: e.detail.code[0],//省code
      city: e.detail.value[1],//市
      citycode: e.detail.code[1],//市code
      county: e.detail.value[2],//区
      countycode: e.detail.code[2],//区code
    });
    var parentCode = e.detail.code[2];
    var areaArr = [];
    var codeArr = [];
    wx.request({
      url: http + '/regionInfo/selectRegionList',
      data: {
        parentCode: parentCode,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        for (var i = 0; i < res.data.data.length; i++) {
          areaArr.push(res.data.data[i].name);
          codeArr.push(res.data.data[i].code);
        }
        that.setData({
          sheetName: areaArr,
          sheet: codeArr
        })
      }
    })
  },

  bindSheetChange: function (e) {
    let that = this;
    console.log(that.data.sheet);

    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sheetCode: that.data.sheet[e.detail.value],
      sheetContent: that.data.sheetName[e.detail.value]
    });
  },
  formSubmit: function (e) {
    let that = this;

    const params = e.detail.value

    console.log(params)

    // 传入表单数据，调用验证方法
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0]
      this.showModal(error)
      return false
    }
    that.setData({
      contactname: e.detail.value.contactname,
      contacttel: e.detail.value.contacttel,
      address: e.detail.value.address,
      companyname: e.detail.value.companyname,
      contactphone: e.detail.value.contactphone,
    });

    wx.request({
      url: http + '/weixin/address/addAddress',
      data: {
        openid: openId,
        memtype: 0,
        contactname: e.detail.value.contactname,
        contacttel: e.detail.value.contacttel,
        country: "中国",
        province: that.data.province,
        provincecode: that.data.provincecode,
        city: that.data.city,
        citycode: that.data.citycode,
        county: that.data.county,
        countycode: that.data.countycode,
        areastreet: that.data.sheetContent,
        areastreetcode: that.data.sheetCode,
        latitude: "0.0",
        longitude: "0.0",
        address: e.detail.value.address,
        companyname: e.detail.value.companyname,
        postcode: that.data.provincecode,
        type: e.detail.value.type[0] == 1 ? 1 : 0,
        contactphone: e.detail.value.contactphone,
        countrycode: "A000086000",
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.code == 1) {//成功
          console.log(that.data.areastreet);
          console.log(that.data.areastreetcode);
          var pages = getCurrentPages();
          var prevPage = pages[pages.length - 2];
          prevPage.setData({
            fromname: that.data.contactname,
            fromprovince: that.data.provincecode,
            fromprovincename: that.data.province,
            fromcityname: that.data.city,
            fromcity: that.data.citycode,
            fromareaname: that.data.county,
            fromarea: that.data.countycode,
            fromareastreetname: that.data.sheetContent,
            fromareastreet: that.data.sheetCode,
            fromaddress: that.data.address,
            fromtel: that.data.contactphone,
            fromcode: that.data.provincecode
          });
          wx.navigateBack({
            delta: 1
          })
        }
      }
    })
  },
  initValidate() {
    // 验证字段的规则
    const rules = {
      contactphone: {
        required: true,
      },
      contactname: {
        required: true,
      },
      address: {
        required: true,
      },
      county: {
        required: true,
      },
      areastreet: {
        required: true,
      },
    }

    // 验证字段的提示信息，若不传则调用默认的信息
    const messages = {
      contactphone: {
        required: '请输入手机号',
      },
      contactname: {
        required: '请输入姓名',
      },
      address: {
        required: '请输入详细地址',
      },
      county: {
        required: '请选择国家/地区',
      },
      areastreet: {
        required: '请选择街道',
      },
      
    }

    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages)

    // 自定义验证规则
    this.WxValidate.addMethod('assistance', (value, param) => {
      return this.WxValidate.optional(value) || (value.length >= 1 && value.length <= 2)
    }, '请勾选1-2个敲码助手')
  },


  getAddress: function (latitude, longitude) {
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
        //console.log(res)
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
      success: function (res) {
        // console.log(res)
        const address = res.address
        // console.log(address)
      },
    })
    var BMap = new bmap.BMapWX({
      ak: 'bhgtBaRaq84Zc7Zmml8icfITWe0OpqRP'
    })
    var that = this
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
          region: [province, city, district]
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })

  },
  // 点击跳转我的地址
  address_book: function (e) {
    wx.navigateTo({
      url: '../address_book/address_book',
    })
  },
  onLoad: function (options) {
    var that = this;
    that.initValidate();
    wx.setNavigationBarTitle({
      title: '寄件人地址填写'  //修改title
    })
  },
  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
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