//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    pie: "2w",
    received: "500",
    big_navs:[
      {
        nav_id: 1,
        img: '../../images/shangmen.png',
        textTitle: "快递员上门",
        textPs: "一小时取件"
      },
      {
        nav_id: 2,
        img: '../../images/saoma.png',
        textTitle: "扫码寄件",
        textPs: "扫小哥/运单二维码"
      },
      {
        nav_id: 3,
        img: '../../images/jidajian.png',
        textTitle: "寄大件",
        textPs: "20公斤以上优惠寄"
      },
      {
        nav_id: 4,
        img: '../../images/fengchao.png',
        textTitle: "丰巢寄件",
        textPs: "24小时自助寄件"
      }
    ],
    small_navs:[
    
      // {
      //   nav_id:5,
      //   img: "../../images/yiyao.png",
      //   text: "医药寄"
      // },
      {
        nav_id: 5,
        img: "../../images/piliang.png",
        text: "批量寄"
      },
      // {
      //   nav_id: 7,
      //   img: "../../images/shengxian.png",
      //   text: "生鲜寄"
      // },
      {
        nav_id: 6,
        img: "../../images/guojijijian.png",
        text: "国际及港澳台"
      },
      {
        nav_id: 7,
        img: "../../images/duobang.png",
        text: "多邦易购"
      },

      {
        nav_id: 8,
        img: "../../images/yiyao.png",
        text: "医药寄"
      },
      {
        nav_id: 9,
        img: "../../images/tongcheng.png",
        text: "同城直送"
      },
      {
        nav_id: 10,
        img: "../../images/lenglian.png",
        text: "冷链物流"
      },
      // {
      //   nav_id: 10,
      //   img: "../../images/piliang.png",
      //   text: "批量寄"
      // },
      {
        nav_id: 11,
        img: "../../images/shengxian.png",
        text: "生鲜寄"
      }
      // {
      //   nav_id: 11,
      //   img: "../../images/duobang.png",
      //   text: "多邦易购"
      // }
    ]
    
  },
  onLoad:function(){
    var that = this;
    var openId = wx.getStorageSync('openId')
    console.log(openId);
    // if (!openId) {
    //   wx.navigateTo({
    //     url: '/pages/authorize/authorize',
    //   })
    // }
    // wx.showToast({
    //   title: '正在加载',
    //   icon: 'loading',
    //   duration: 1000,
    // });
  },
  getNavItem:function(e){
    console.log(e);
    var nav_id = e.currentTarget.dataset.nav_id;
    // console.log('nav_id',nav_id);
    if (nav_id == 1){
      wx.navigateTo({
        url: './shangmen/shangmen?nav_id=1',
      })
    } else if (nav_id==2){
      // wx.navigateTo({
      //   url: './shangmen/shangmen',
      // })
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
    } else if (nav_id == 3){
      wx.navigateTo({
        url: './shangmen/shangmen?nav_id=3',
      })
    } else if (nav_id==4) {
      wx.navigateTo({
        url: './shangmen/shangmen?nav_id=4',
      })
    } 
  },
  getNavSmall:function(e){
    console.log(e);
    var nav_id = e.currentTarget.dataset.nav_id;
      if (nav_id == 5) {
      wx.navigateTo({
        url: './batch_jijian/batch_jijian',
      })
    } else if (nav_id == 6) {
      wx.navigateTo({
        url: './shangmen/shangmen?nav_id=6',
      })
    // } else if (nav_id == 7) {
    //   wx.navigateTo({
    //     url: './shangmen/shangmen?nav_id=7',
    //   })
    // } else if (nav_id == 8) {
    //   wx.navigateTo({
    //     url: './shangmen/shangmen?nav_id=8',
    //   })
    //   } else if (nav_id == 9) {
    //     wx.navigateTo({
    //       url: './shangmen/shangmen?nav_id=9',
    //     })
    //   } else if (nav_id == 10) {
    //     wx.navigateTo({
    //       url: './shangmen/shangmen?nav_id=10',
    //     })
    //   } else if (nav_id == 11) {
    //     wx.navigateTo({
    //       url: './shangmen/shangmen?nav_id=11',
    //     })
      }
  }
})
