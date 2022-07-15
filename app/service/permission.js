/*
 * @Description: 有关 category 表的逻辑操作和数据处理
 * @Date: 2022-06-30 15:35:54
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-15 17:08:29
 */


'use strict';

const BaseService = require('./base');

class PermissionService extends BaseService {

  // 查询所有角色数据
  async findAll() {
    const { ctx } = this;
    const req = ctx.request.body;
    console.log('----req-----', req);
    const data = await this._findAll('Permission', req);
    const total = await this._count('Permission');
    return { total, data };
  }

  // 新增角色
  async addRole() {
    const { ctx } = this;
    const req = ctx.request.body;
    const data = await this._findAll('Permission', {});
    // const flag = data.find(item => item.name === req.name);
    for (const item of data) {
      // if (req.name === item.name) return false;
      if (req.permission === item.permission) {
        return false;
      }
      const res = await this.add({ permission: req.permission, desc: req.desc }, '新增角色成功！');
      return res;
    }
  }
  // 新增角色
  async add(json, msg) {
    return await this._add('Permission', json, msg);
  }
  // 删除角色
  async del(id) {
    const data = await this._delete('Permission', id);
    if (!data) return 'Id传入有误';
    return data;
  }

  // 编辑角色
  async edit(json) {
    const data = await this._edit('Permission', json);
    if (!data) return 'Id传入有误';
    return data;
  }
}

module.exports = PermissionService;
