/*
 * @Description: 鉴权服务端
 * @Date: 2022-06-30 17:13:50
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-01 11:06:10
 */
// app/service/auth.js

'use strict';
const Service = require('./base');

class AuthService extends Service {
  async login() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    // 判断该用户是否存在并且密码是否正确
    const result = await ctx.service.user.validUser(username, password);
    if (result) {
      const token = app.jwt.sign({
        username,
      }, app.config.jwt.secret, { expiresIn: '1h' });
      return { data: { user: result, token }, msg: '登录成功！' };
    }
    return { data: null, msg: '账号或密码错误' };
    // ctx.throw(403, '账号或密码错误');
  }
  async getUserInfo() {
    const id = parseInt(this.ctx.query.id);
    const user = await this._findById('User', id);
    return user;
  }
}

module.exports = AuthService;
