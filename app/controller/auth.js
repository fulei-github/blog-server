/*
 * @Description: 登录鉴权
 * @Date: 2022-06-30 17:12:16
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-30 18:29:49
 */

'use strict';
// const md5 = require('md5');
const Controller = require('./base');

class AuthController extends Controller {
  async login() {
    const { service } = this;
    const result = await service.auth.login();
    if (result.data) {
      this.success(result.data, result.msg);
    } else {
      this.error(result.msg);
    }
  }

  // 根据id查询用户信息
  async getUserInfo() {
    const { service } = this;
    const user = await service.auth.getUserInfo();
    if (user) {
      this.success(user, '查询成功！');
    } else {
      this.error('未查询都该id人员信息！');
    }

  }
}

module.exports = AuthController;
