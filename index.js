/**!
 * koa-wx-printer - index.js
 *
 * Copyright(c) 2014
 * MIT Licensed
 *
 * Authors:
 *   <1604583867@qq.com> (http://youtellme.cc)
 */

'use strict';

/**
 * Module dependencies.
 */

var request = require('co-request');

/**
 * Expose `wxprinter()`.
 */
module.exports = wxprinter;

/**
 *
 * @param {Object} options
 * @see https://github.com/qingyuexi/koa-wx-printer
 * @api public以下是易联云打印机
 */
 //使用 yield wxprinter(opts);
// var opts = {
//     "partner": 914,
//     "apikey": "3785b31b2c84f3c47e51a6c4481f8a5fc2eea72a",
//     "machine_code": "3400453726",
//     "msign": "gn5p5zk585b6",
//     "time": parseInt(new Date().getTime() / 1000),
//     "content": '2222'
// }

function* wxprinter(opts) {
	data = opts || {};

    var host = 'http://open.10ss.net:8888';

    var sign = data.apikey + 'machine_code' + data.machine_code + 'partner' + data.partner + 'time' + data.time + data.msign;

    sign = this.md5(sign);
    data.sign = sign.toUpperCase();

    delete data.apikey;
    delete data.msign;

    var _data = {
        partner: data.partner,
        machine_code: data.machine_code,
        time: data.time,
        sign: data.sign,
        content: data.content
    };

    var result = yield request.post(host, {form: _data});
    // console.log(result.body);
    return result;
}

