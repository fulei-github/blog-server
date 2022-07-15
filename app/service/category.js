/*
 * @Description: 有关 category 表的逻辑操作和数据处理
 * @Date: 2022-06-30 15:35:54
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-15 20:17:40
 */


'use strict';

const BaseService = require('./base');

class CategoryService extends BaseService {

  // 查询所有分类数据
  async findAll() {
    const { ctx } = this;
    const req = ctx.request.body;
    // console.log('----req-----', req);
    const data = await this._findAll('Category', req);
    const total = await this._count('Category');
    return { total, data };
  }

  // 新增分类
  async addCatgory() {
    const { ctx } = this;
    const req = ctx.request.body;
    const data = await this._findAll('Category', {});

    for (const item of data) {
      if (req.name === item.name) {
        return false;
      }
      const res = await this.add({ name: req.name }, '新增分类成功！');

      return res;
    }
  }
  // 新增分类
  async add(json) {
    const { ctx } = this;
    // const res = await this._add('Category', json, msg);
    const res = await ctx.model.Category.create(json);
    console.log('-------res', res);
    return res;
  }
  // 删除分类
  async del(id) {
    const data = await this._delete('Category', id);
    if (!data) return 'Id传入有误';
    return data;
  }

}

module.exports = CategoryService;
