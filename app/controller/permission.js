/*
 * @Description:category 表的控制器
 * @Date: 2022-06-30 15:44:10
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-15 17:06:34
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
  // 新增角色
  async addRole() {
    const { service } = this;
    const result = await service.permission.addRole();
    if (result) {
      this.success(result, 'OK');
    } else {
      this.error('已存在相同的角色！', '1');
    }

  }

  // 根据前端传的id删除用户
  async delUserById() {
    const { ctx, service } = this;
    const id = ctx.request.body.id;
    console.log('----------id----------', id);
    const result = await service.permission.del(id);
    if (result === 'Server error') this.error(0, result);
    this.success(1, result);
  }

  // 修改数据
  async edit() {
    const { ctx, service } = this;
    const { id, permission, desc } = ctx.request.body;
    const result = await service.permission.edit({ id, permission, desc });
    if (result === 'Server error') this.error(0, result);
    this.success(1, result);
  }
}

module.exports = PermissionController;
