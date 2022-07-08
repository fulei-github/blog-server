/*
 * @Description: 有关 category 表的逻辑操作和数据处理
 * @Date: 2022-06-30 15:35:54
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-01 16:15:07
 */


'use strict';

const BaseService = require('./base');

class CategoryService extends BaseService {

  // 查询所有分类数据
  async findAll() {
    const { ctx } = this;
    const req = ctx.request.body;
    console.log('----req-----', req);
    const data = await this._findAll('Category', req);
    const total = await this._count('Category');
    return { total, data };
  }

  // 新增分类数据
  async add(json, msg) {
    return await this._add('User', json, msg);
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

module.exports = CategoryService;
