/*
 * @Description:category 表的控制器
 * @Date: 2022-06-30 15:44:10
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-14 23:58:56
 */
// app/controller/user.js
'use strict';

const BaseController = require('./base');

class PermissionController extends BaseController {
  // 查询所有数据
  async findAll() {
    const { service } = this;
    const result = await service.permission.findAll();
    this.success(result, 'OK');
  }
  // 新增分类
  async addCatgory() {
    const { service } = this;
    const result = await service.category.addCatgory();
    if (result) {
      this.success(result, 'OK');
    } else {
      this.error('已存在相同的分类！', '1');
    }

  }
  // 通过搜索条件查询用户信息 username  phone  createDate   state
  async findUserByReq() {
    const { service } = this;
    const result = await service.user.findUserByReq();
    if (result) {
      this.success(result, 'OK');
    } else {
      this.error('系统查询不到该用户信息');
    }
  }

  // 根据前端传的id删除用户
  async delUserById() {
    const { ctx, service } = this;
    const id = ctx.body.id;
    const result = await service.user.del(id);
    if (result === 'Server error') this.error(0, result);
    this.success(1, result);
  }


  // 根据ID查数据
  async findById() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const result = await service.user.findById(id);
    this.success(result, 'OK');
  }

  // 新增数据
  async add() {
    const { ctx, service } = this;
    const { username, nickname, avatar, sex, age } = ctx.request.body;
    const result = await service.user.add({ id: new Date().valueOf(), username, nickname, avatar, sex, age });
    if (result === 'Server error') this.error(0, result);
    this.success(1, result);
  }


}

module.exports = PermissionController;
