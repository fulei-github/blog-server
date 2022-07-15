/*
 * @Description: 有关 category 表的逻辑操作和数据处理
 * @Date: 2022-06-30 15:35:54
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-16 00:46:22
 */


'use strict';

const BaseService = require('./base');

class PermissionService extends BaseService {

  // 查询所有角色数据
  async findAll() {
    const { ctx } = this;
    const req = ctx.request.body;
    console.log('----req-----', req);
    const data = await this._findAll('Article', req);
    const total = await this._count('Article');
    return { total, data };
  }

  // 新增文章
  async addArticle() {
    const { ctx } = this;
    try {
      const req = ctx.request.body;
      await this.add(req, '发表文章成功！');
      return true;
    } catch (error) {
      return error;
    }
  }
  // 根据ID查询用户数据
  async findById(id) {
    return await this._findById('Article', id);
  }
  // 新增文章
  async add(json) {
    const { ctx } = this;
    const res = await ctx.model.Article.create(json);
    return res;
  }
  // 删除文章
  async del(id) {
    const data = await this._delete('Article', id);
    if (!data) return 'Id传入有误';
    return data;
  }

  // 编辑文章
  async edit(json) {
    const data = await this._edit('Article', json);
    if (!data) return 'Id传入有误';
    return data;
  }
}

module.exports = PermissionService;
