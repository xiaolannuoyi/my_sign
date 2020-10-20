const request = require('request');
//爱奇艺 积分签到 
//pc 端
const iqiyi_cookie_pc = process.env.IQIYI_COOKIE_PC
async function iqiyi_pc() {
  const options = {
    url: 'https://community.iqiyi.com/openApi/score/add?authCookie=bae9Bv43EixFOy2m30NQKj7ZCRvTpKhkOkCC4NKe9Qwlm2Vdunm2ncm2VatuIjrFVUggpN7f&userId=2193693209&channelCode=sign_pcw&agenttype=1&agentversion=0&appKey=basic_pca&appver=0&srcplatform=1&typeCode=point&verticalCode=iQIYI&scoreType=1&user_agent=Mozilla/5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_7)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/86.0.4240.75%20Safari/537.36&dfp=a17c4566411f634f5e90dc34f521f48e8cae802e5982e62bc35896035d875cd0c0&sign=cd044728e5b0eafcb1fc624562b2fa1c',
    headers: {
      Cookie: iqiyi_cookie_pc,
      Host: "community.iqiyi.com",
      Origin: "https://www.iqiyi.com",
      Pragma: "no-cache",
      Referer: "https://www.iqiyi.com/",
      "Sec-Fetch-Dest": 'empty',
      "Sec-Fetch-Mode": 'cors',
      "Sec-Fetch-Site": "same-site",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36"
    }
  };
  request(options, (err, res, body) => {
    try {
        if (err) {
            console.log(err)
          } else {
            const title = 'pc'
            if (res.statusCode == 200) {
              // console.log(JSON.parse(body).data[0])
              let result = JSON.parse(body).data[0]
              if (result.code == 'A0000') {
                // 签到
                console.log(`${title} : ${result.score}\n`)
              } else if (result.code == 'A0002') {
                // 已经签到过
                console.log(`${title} : ${result.message}\n`)
              } else {
                // 其他
                console.log(`${title} : ${body}\n`)
              }
            } else {
              console.log(`${title} : 失败\n`)
            }
          }
    } catch (error) {
        console.log('爱奇艺pc-catch')
    }
  })
}

//移动 端
const iqiyi_cookie_mo = process.env.IQIYI_COOKIE_MO;
async function iqiyi_mo() {
  const options = {
    url: 'http://iface2.iqiyi.com/fusion/3.0/switch/ext?content=m_qiyi_bio_baseline&platform_id=12',
    headers: {
      Cookie: iqiyi_cookie_mo,
      Host: "iface2.iqiyi.com",
      "Accept-Language": 'zh-cn',
      "Accept-Encoding": "gzip, deflate",
      "Connection": "keep-alive",
      "User-Agent": "iQiYiPhoneVideo/20200930121200 CFNetwork/1197 Darwin/20.0.0"
    }
  };
  request(options, (err, res, body) => {
    try {
        if (err) {
            console.log(err)
          } else {
            const title = '移动端'
            if (res.statusCode == 200) {
            //   console.log(JSON.parse(body))
              let result = JSON.parse(JSON.parse(body).content.m_qiyi_bio_baseline.config);
              console.log(`${title} : ${result.s_s_r},连续签到${result.s_all}\n`)
              console.log(`总积分:${result.d_c_li}\n`)
            } else {
              console.log(`${title} : 失败`)
            }
          }
    } catch (error) {
        console.log('爱奇艺移动-catch',error)
    }
  })
}

async function start(){
  if(!iqiyi_cookie_pc){
    console.log('请填写爱奇艺pc端cookie')
    return
  }
  // if (!iqiyi_cookie_mo) {
  //   console.log('请填写爱奇艺移动端cookie')
  //   return
  // }
  console.log('爱奇艺-积分签到\n')
  await iqiyi_pc()
  // await iqiyi_mo()
}

start()



