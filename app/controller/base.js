/*
 * @Description: 基础controller配置
 * @Date: 2022-06-30 15:42:44
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-30 15:43:01
 */
// app/controller/base.js
'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  /* 操作成功，返回数据 */
  async success(data, msg, code = 200) {
    const { ctx } = this;
    ctx.body = {
      code,
      msg,
      data,
    };
  }

  /* 操作失败，返回数据 */
  async error(msg, code = 403) {
    const { ctx } = this;
    ctx.body = {
      code,
      msg,
      data: null,
    };
  }
}

module.exports = BaseController;
