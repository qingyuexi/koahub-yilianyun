

koa-wx-printer易联云打印机node接口

## Installation

```sh
$ npm install koa-wx-printer
```

## Use with co-request

```js
var printer = require('koa-wx-printer');
var result = yield printer({
    "partner": 914,//用户id（管理中心系统集成里获取）
    "apikey": "3785b31b2c84f3c47e51a6c4481f8a5fc2eea72a",//apikey（管理中心系统集成里获取）
    "machine_code": "3400453726",//打印机终端号
    "msign": "gn5p5zk585b6",//打印机终端密钥
    "time": parseInt(new Date().getTime() / 1000),//当前时间戳（服务器用于验证超时）
    "content": '2222'//需要传输打印的内容数据
});

```
作者官网:
http://www.youtellme.cc