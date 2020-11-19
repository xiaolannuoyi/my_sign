# 我的自动签到

1. 获取cookie

   打开👇的网站地址，并登陆。

   打开控制台`network`,找到同域名下的请求并打开。

   ![image-20201014171715711](https://gitee.com/xiaolannuoyi/my_drawing_bed/raw/master/image/image-20201014171715711.png)

   复制cookie，cookie比较长，注意复制完整。

  ![image-20201014171956894](https://gitee.com/xiaolannuoyi/my_drawing_bed/raw/master/image/image-20201014171956894.png)

2. 存cookie

   将cookie存到 项目内的`Settings->secrets`中，并设置👇的变量名即可。

  ![image-20201014171323785](https://gitee.com/xiaolannuoyi/my_drawing_bed/raw/master/image/image-20201014171323785.png)

3. 微信通知（server酱key）

   参考[京东定时签到-GitHub 实现](https://ruicky.me/2020/06/05/jd-sign/)

功能：

1. 爱奇艺-积分签到 [pc][移动]
   * [pc-cookie] [网站地址](https://www.iqiyi.com/) 变量名 `IQIYI_COOKIE_PC`
   * [移动-cookie] [网站地址](https://m.iqiyi.com/) 变量名 `IQIYI_COOKIE_MO`
2. 芒果-积分签到 [pc][移动]
   * [cookie] [网站地址](https://www.mgtv.com/) 变量名 `MANGGUO_COOKIE`



