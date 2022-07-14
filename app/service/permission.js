/*
 * @Description: 有关 category 表的逻辑操作和数据处理
 * @Date: 2022-06-30 15:35:54
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-15 00:00:13
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

  // 新增分类数据
  async addCatgory() {
    const { ctx } = this;
    const req = ctx.request.body;
    const data = await this._findAll('Category', {});
    // const flag = data.find(item => item.name === req.name);
    for (const item of data) {
      // if (req.name === item.name) return false;
      if (req.name === item.name) {
        return false;
      }
      const res = await this.add({ name: req.name }, '新增分类成功！');
      console.log(res);

    }
    // console.log('----flag-----', flag);
    // if (flag) {
    //   return false;
    // }
    // const res = await this.add('Category', req, '新增分类成功！');

    // return res;
  }
  // 新增用户数据
  async add(json, msg) {
    return await this._add('Category', json, msg);
  }
  // 删除用户数据
  async del22(id) {
    const data = await this._delete('User', id);
    if (!data) return 'Id传入有误';
    return data;
  }

  // 根据ID查询用户数据
  async findById(id) {
    return await this._findById('User', id);
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

}

module.exports = PermissionService;
