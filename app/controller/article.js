/*
 * @Description:article 表的控制器
 * @Date: 2022-06-30 15:44:10
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-28 22:18:19
 */
'use strict';

const BaseController = require('./base');

class ArticleController extends BaseController {
  // 查询所有数据
  async findAll() {
    const { service } = this;
    const result = await service.article.findAll();
    this.success(result, 'OK');
  }
  // 查询所有数据
  async findListBySee() {
    const { service } = this;
    const result = await service.article.findListBySee();
    this.success(result, 'OK');
  }

  // 根据ID查数据
  async findById() {
    const { ctx, service } = this;
    const id = ctx.request.body.id;
    const result = await service.article.findById(id);
    this.success(result, 'OK');
  }

  // 新增文章
  async addArticle() {
    const { service } = this;
    const result = await service.article.addArticle();
    if (result) {
      this.success([], '发表文章成功！');
    }

  }

  // 根据前端传的id删除文章
  async delArtById() {
    const { ctx, service } = this;
    const id = ctx.request.body.id;
    const result = await service.article.del(id);
    if (result === 'Server error') this.error(0, result);
    this.success([], result);
  }

  // 修改文章
  async edit() {
    const { ctx, service } = this;
    const { id } = ctx.request.body;
    const result = await service.article.edit({ id });
    if (result === 'Server error') this.error(0, result);
    this.success(1, result);
  }

  // 根据目录id查询该目录下的文章列表
  async findListById() {
    const { ctx, service } = this;
    const req = ctx.request.body;
    const result = await service.article.findArtById(req);
    this.success(result, 'OK');
  }
  // 根据目录id查询该目录下的文章列表
  async getArtById() {
    const { ctx, service } = this;
    const req = ctx.request.body;
    const result = await service.article.getArtById(req);
    this.success(result, 'OK');
  }
}

module.exports = ArticleController;
