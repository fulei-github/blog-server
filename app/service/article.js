/*
 * @Description: 有关 category 表的逻辑操作和数据处理
 * @Date: 2022-06-30 15:35:54
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-28 22:29:24
 */


'use strict';

const BaseService = require('./base');

class PermissionService extends BaseService {
  // 按浏览量排序
  async findListBySee() {
    const { ctx } = this;
    const req = ctx.request.body;
    const total = await this._count('Article');
    const user_total = await this._count('User');
    const art_total = await this._count('Article');
    const cat_total = await this._count('Category');
    const data = await this._findAll('Article', req);
    const totalObj = {
      total,
      user_total,
      art_total,
      cat_total,
    };
    const arr = data.sort((a, b) => b.article_views - a.article_views);
    return { totalObj, data: arr };
  }
  // 查询所有文章数据
  async findAll() {
    const { ctx } = this;
    const req = ctx.request.body;
    const user_total = await this._count('User');
    const art_total = await this._count('Article');
    const cat_total = await this._count('Category');
    console.log('----req-----', req);
    const data = await this._findAll('Article', req);
    const total = await this._count('Article');
    const totalObj = {
      total,
      user_total,
      art_total,
      cat_total,
    };
    return { totalObj, data };
  }
  // 根据目录id查询该目录下的文章
  async findArtById(req) {
    const { ctx } = this;
    // 根据id查数据
    // console.log('---------根据id查数据---------', req.id);
    // const limit = req.rows * 1;
    // const offset = (req.page - 1) * limit;
    const data = await ctx.model.Article.findAll();
    const list = [];
    data.forEach(item => {
      if (String(item.cat_id) === String(req.id)) {
        list.push(item);
      }
    });
    const total = list.length;
    if (list.length < 10) {
      return { total, list };
    }
    console.log('---------根据id查数据---------', req);
    const finallList = list.slice((req.page - 1) * req.rows, req.page * req.rows);
    return { total, list: finallList };
  }
  // 根据user_id 得到该用户下的 分类及分类下的文章列表
  async getArtById(req) {
    const { ctx } = this;
    const data = await ctx.model.Article.findAll();
    const catList = await ctx.model.Category.findAll();

    const list = [];
    // const finalList = [];
    const arr = [];
    data.forEach(item => {
      if (String(item.user_id) === String(req.id)) {
        list.push(item);
      }
    });
    catList.forEach(item => {
      arr.push({
        name: item.name,
        id: item.id,
        total: 0,
        data: [],
      });
    });
    for (let index = 0; index < list.length; index++) {
      arr.forEach(v => {
        if (String(list[index].cat_id) === String(v.id)) {
          v.data.push(list[index]);
          v.total = v.data.length;
        }
      });
    }
    const finallData = {
      list: arr,
    };
    return finallData;
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
    console.log('-----------请求的入参------', json);
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
