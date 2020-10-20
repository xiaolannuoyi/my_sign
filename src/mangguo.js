const request = require('request');
//芒果tv 积分签到 
//pc 端
const mangguo_cookie = process.env.MANGGUO_COOKIE
async function mangguo_pc() {
    const options = {
        url: 'https://task.bz.mgtv.com/user/task_take?type=11&callback=jQuery182030789448229585403_1602667660266&_support=10000000&uuid=9c0dd4b948ee4ed7882ed1e8b300a1f8&ticket=BU3C8C13F3MGD9GO8CMG&mac=77fea791-ec02-49e1-9867-f19f9ab18ae6&platform=4&device=&appVersion=&osType=&abroad=&_=1602667675554',
        headers: {
            Cookie: mangguo_cookie,
            Referer: "https://i.mgtv.com/",
            'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36"
        }
    };
    request(options, (err, res, body) => {
        try {
            if (err) {
                console.log(err)
            } else {
                const title = 'pc'
                if (res.statusCode == 200) {
                    // console.log(body)
                    let result = JSON.parse(body.substring(body.indexOf('(') + 1, body.length - 2))
                    if (result.code == '200') {
                        // 签到
                        console.log(`${title} : ${result.msg}\n`)
                    } else if (result.code == '3004') {
                        // 已经签到过
                        console.log(`${title} : 已领取\n`)
                    } else {
                        // 其他
                        console.log(`${title} : ${body}\n`)
                    }
                } else {
                    console.log(`${title} : 失败\n`)
                }
            }
        } catch (error) {
            console.log('芒果pc-catch')
        }
    })
}

//移动 端
async function mangguo_mo() {
    const options = {
        url: 'https://credits.bz.mgtv.com/user/creditsTake?uuid=9c0dd4b948ee4ed7882ed1e8b300a1f8&uid=9c0dd4b948ee4ed7882ed1e8b300a1f8&ticket=BSUAT4MUV69GBCH7QUEG&token=BSUAT4MUV69GBCH7QUEG&device=iPhone&did=c504d4573bb547b3dae621f1dc9d2c706d9b50f4&deviceId=c504d4573bb547b3dae621f1dc9d2c706d9b50f4&appVersion=6.7.2&osType=ios&platform=iphone&abroad=0&aid=635&nonce=UFkROpqyXS7mwm5cm0PM8Gw8Cu6BnCnj&timestamp=1602668461&appid=credits_vd8S2VNu&type=1&sign=51bdcdeed68d7f1bfe671acd23ee12f1&callback=__jp5',
        headers: {
            Cookie: mangguo_cookie,
            Host: "credits.bz.mgtv.com",
            Referer: "https://app.mgtv.com/credits/index.html?from=title",
            'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ImgoTV-iphone/6.7.2.2009251910"
        }
    };
    request(options, (err, res, body) => {
        try {
            if (err) {
                console.log(err)
            } else {
                const title = '移动端'
                if (res.statusCode == 200) {
                    // console.log(body)
                    let result = JSON.parse(body.substring(6, body.length - 2))

                    if (result.code == '200') {
                        // 签到
                        console.log(`${title} : ${result.msg}\n`)
                    } else if (result.code == '1002') {
                        // 已经签到过
                        console.log(`${title} : 已领取\n`)
                    } else {
                        // 其他
                        console.log(`${title} : ${body}\n`)
                    }
                } else {
                    console.log(`${title} : 失败`)
                }
            }
        } catch (error) {
            console.log('芒果移动-catch')
        }
    })
}

async function start() {
    if (!mangguo_cookie) {
        console.log('请填写芒果tv cookie')
        return
    }
    console.log('芒果tv-积分签到\n')
    await mangguo_pc()
    await mangguo_mo()
}

start()



