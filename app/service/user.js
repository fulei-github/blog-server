/*
 * @Description: 有关user表的逻辑操作和数据处理
 * @Date: 2022-06-30 15:35:54
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-14 23:30:43
 */


'use strict';

const BaseService = require('./base');
const crypto = require('crypto');

class UserService extends BaseService {
  // 查询user表，验证账号与请求来的username是否一致，不允许重复--注册用
  async createUser() {
    const { ctx } = this;
    // 校验账号密码
    ctx.validate({
      username: { type: 'string', required: true, desc: '用户名' },
      password: { type: 'string', required: true, desc: '密码' },
    });
    const { username, password } = ctx.request.body;
    const isHasUserName = await ctx.model.User.findOne({
      where: {
        username,
      },
    });
    if (isHasUserName) {
      return false;
    }
    // 对密码进行加密
    const pwd = this.getMd5Data(password);
    const result = await this.add({ username, password: pwd }, '注册成功');
    return result;
  }

  // 查询user表，验证密码和账号---验证账号密码是否匹配--登录用
  async validUser(username, password) {
    const data = await this._findAll('User', {}); // 表里的数据[{},{}]
    const pwd = crypto.createHash('md5').update(password).digest('hex');
    // console.log('-----data-----', data);
    for (const item of data) {
      if (item.username === username && item.password === pwd) return { username: item.username, nickname: item.nickname, phone: item.phone, state: item.state, email: item.email, age: item.age, permission: item.permission, id: item.id };
    }
    return false;
  }
  // 查询所有用户数据
  async findAll() {
    const { ctx } = this;
    const req = ctx.request.body;
    const data = await this._findAll('User', req);
    const total = await this._count('User');
    return { total, data };
  }

  // 通过搜索条件查询用户信息 username  phone  createDate   state
  async findUserByReq() {
    const { ctx } = this;
    const req = ctx.request.body;
    console.log('---req----', req);
    const data = await this._findAll('User', {});
    for (const item of data) {
      if (req.username === item.username || req.phone === item.phone || req.state === item.state) return item;
    }
    return false;
  }

  // 删除用户数据
  async delUserById(id) {
    const data = await this._delete('User', id);
    if (!data) return 'Id传入有误';
    return data;
  }

  // 根据ID查询用户数据
  async findById(id) {
    return await this._findById('User', id);
  }

  // 新增用户数据
  async add(json, msg) {
    return await this._add('User', json, msg);
  }

  // 编辑用户数据
  async edit(json) {
    const data = await this._edit('User', json);
    if (!data) return 'Id传入有误';
    return data;
  }

  // 删除用户数据
  async del(id) {
    const data = await this._delete('User', id);
    if (!data) return 'Id传入有误';
    return data;
  }

  getMd5Data(data) {
    return crypto.createHash('md5').update(data).digest('hex');
  }
}

module.exports = UserService;
