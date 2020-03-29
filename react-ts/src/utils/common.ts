// import Report from '@xpeng/report-js'
// import wxInit, { Options } from '@xpeng/wx-init'

// interface ShareData {
//   title: string,
//   desc: string,
//   link: string,
//   imgUrl: string
// }

// export function sign(data?) {
//   const href = window.location.href
//   let env = 'production'
//   if (href.indexOf('static.xiaopeng.com') !== -1) {
//     env = 'production'
//   } else {
//     env = 'test'
//   }

//   return new Report({
//     appid: '5001',
//     so: '1001001',
//     re: window.document.referrer,
//     url: window.location.href,
//     ...data
//   }, {
//     env: env
//   })
// }

// export function initWxShare(shareData: ShareData, options: Options = {}) {
//   const data = {
//     success: (res) => {
//       console.log(res)
//       console.log('分享设置成功')
//     },
//     fail: (err) => {
//       console.log(err)
//       console.log('分享设置失败')
//     },
//     ...shareData
//   }
//   wxInit([
//     'updateAppMessageShareData',
//     'updateTimelineShareData'
//     // 填写你需要用到的相关 API，参考：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
//   ], options).then((wx) => {
//     wx.updateAppMessageShareData(data)
//     wx.updateTimelineShareData(data)
//   })
// }

/**
 * transformToQueryUrl: 将url转换成查询参数类型的url
 * @param url {string}
 * @param params {object}
 * @returns {string}
 */
export function transformToQueryUrl ( url, params ) {
  let query = ''
  if ( params && Object.keys( params ).length > 0 ) {
    query = '?'
    let count = 1
    for ( let ele in params ) {
      if ( count < Object.keys( params ).length ) {
        query += ele + '=' + params[ele] + '&'
        count++
      } else {
        query += ele + '=' + params[ele]
      }
    }
  }
  return url + query
}

/**
 * 根据传入url及传递参数，跳转到对应的网页
 * @param {string} url 路径
 * @param {*} params 参数
 */
export function openUrl ( url: string, params?: any, target?: string ) {
  var el = document.createElement( 'a' )
  document.body.appendChild( el )
  el.href = transformToQueryUrl( url, params )
  el.target = target ? '_self' : '_blank'

  var e = document.createEvent( 'MouseEvents' )
  e.initEvent( 'click', true, true )
  el.dispatchEvent( e )
  document.body.removeChild( el )
}
