//index.js
//获取应用实例
const app = getApp();


Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false
  },
  //事件处理函数
  getImg:function () {
    wx.request({
      url:"http://127.0.0.1:3001/imglist",
      success:(res)=>{
        console.log(res);
        this.setData({list:res.data})
      }
    });
    wx.request({
      url:"http://127.0.0.1:3001/Floors",
      success:(res)=>{
        console.log(res);
        this.setData({Floor:res.data})
        // console.log(res.data[0].img_url)
      }
    });
    wx.request({
      url:"http://127.0.0.1:3001/slides",
      success:(res)=>{
        console.log(res);
        this.setData({slide:res.data})
      console.log(res)
      }
    });
  },

  onLoad: function () {
    this.getImg();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})
