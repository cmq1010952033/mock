var WxParse = require('../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    var _this = this ;
    wx.showLoading({
      title: '正在加载...',
    })
    
    wx.request({
      url:'http://www.xn--yeto52k3fb.top/admin188admin/php/webNes.php', 
      method: "POST",
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data:{
        id: options.id
       
      },
      dataType: 'json',
      success: function (res) {
        // var article = res.data[0];
        // console.log(article)
        _this.setData({ article: res.data[0].msgHtml })
        // console.log(_this.data.msgData)
        
        WxParse.wxParse('article', 'html', article, _this, 5);
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