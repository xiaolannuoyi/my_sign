//慕课网
const request = require('request');

//移动 端
const mukewang_cookie_mo = process.env.MUKEWANG_COOKIE_MO;
async function mukewang_mo() {
  const options = {
    url: 'https://m.imooc.com/appwap/api/integral/signinToday',
    method: 'GET',
    headers: {
      Host: 'm.imooc.com',
      Cookie: mukewang_cookie_mo,
      Connection: ' keep-alive',
      'If-None-Match': 'W/"ec-fg8NY7fDcbumZAEHH7S9ig"',
      Accept: "application/json, text/javascript, */*; q=0.01",
      'User-Agent': 'mukewang/7.4.3 (iPhone; iOS 14.2; Scale/2.00) webview /sa-sdk-ios/sensors-verify/sensordata.open.com.cn?imooc ',
      'Referer': 'https://m.imooc.com/appwap/integrate',
      'Accept-Language': 'zh-cn',
      'X-Requested-With': 'XMLHttpRequest',
    }
  };
  request(options, (err, res, body) => {
    try {
      if (err) {
        console.log(err)
      } else {
        const title = '慕课网'
        if (res.statusCode == 200) {
          // console.log('========', body)
          let result = JSON.parse(body).data.data
          console.log(`${title} : ${result.sign_days_msg},${result.imsg},${result.reward_msg}\n`)
        } else {
          console.log(`${title} : 失败\n`)
        }
      }
    } catch (error) {
      console.log('慕课网移动-catch', error)
    }
  })
}

async function start() {
  if (!mukewang_cookie_mo) {
    console.log('请填写慕课网移动端cookie')
    return
  }
  await mukewang_mo()
}

start()
