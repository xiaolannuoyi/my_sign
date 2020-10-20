// version v0.0.1
// create by ruicky
// detail url: https://github.com/ruicky/jd_sign_bot

const exec = require('child_process').execSync
const fs = require('fs')
const rp = require('request-promise')

// 公共变量
const serverJ = process.env.PUSH_KEY


async function sendNotify (text,desp) {
  const options ={
    uri:  `https://sc.ftqq.com/${serverJ}.send`,
    form: { text, desp },
    json: true,
    method: 'POST'
  }
  await rp.post(options).then(res=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })
}


async function start() {
  // 执行
  await exec("node src/iqiyi.js >> my.txt");
  console.log('爱奇艺执行完毕')
  await exec("node src/mangguo.js >> my.txt");
  console.log('爱奇艺执行完毕')
  
  if (serverJ) {
    const path = "./my.txt";
    let content = "";
    if (fs.existsSync(path)) {
      content = fs.readFileSync(path, "utf8");
    }
    await sendNotify("视频签到-" + new Date().toLocaleDateString(), content);
    console.log('发送结果完毕')
  }
}

start()