//百度网盘
const request = require('request');

//移动 端
const baidupan_cookie_mo = process.env.BAIDUPAN_COOKIE_MO;
async function baidupan_mo() {
    const options = {
        url: `https://pan.baidu.com/pmall/points/balance?_t=${~~(+new Date()/1000)}`,
        method: 'GET',
        headers: {
            Cookie: baidupan_cookie_mo,
            Host: 'pan.baidu.com',
            Connection: 'keep-alive',
            Accept: 'application/json, text/plain, */*',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;netdisk;11.3.1;iPhone11;ios-iphone;14.2;zh_CN;JSbridge4.4.2',
            Referer: 'https://pan.baidu.com/act/task/mainpage?id=987141565000&from=8y',
            'Accept-Language': 'zh-cn',
            'X-Requested-With': 'XMLHttpRequest'
        }
    };
    request(options, (err, res, body) => {
        try {
            if (err) {
                console.log(err)
            } else {
                const title = '百度网盘'
                if (res.statusCode == 200) {
                    // console.log('========', body)
                    let result = JSON.parse(body)
                    console.log(`${title} : 今日积分：${result.today_points},总积分：${result.balance+result.today_points}\n`)
                } else {
                    console.log(`${title} : 失败\n`)
                }
            }
        } catch (error) {
            console.log('百度网盘移动-catch', error)
        }
    })
}

async function start() {
    if (!baidupan_cookie_mo) {
        console.log('请填写百度网盘移动端cookie')
        return
    }
    await baidupan_mo()
}

start()
