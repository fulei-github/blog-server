/*
 * @Description:category 表的控制器
 * @Date: 2022-06-30 15:44:10
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-16 16:41:18
 */
// app/controller/user.js
'use strict';

const BaseController = require('./base');

class CategoryController extends BaseController {
  // 查询所有数据
  async findAll() {
    const { service } = this;
    const result = await service.category.findAll();
    this.success(result, 'OK');
  }

  // 新增分类
  async addCatgory() {
    const { service } = this;
    const result = await service.category.addCatgory();
    if (result) {
      this.success(result, '添加分类成功！');
    } else {
      this.error('已存在相同的分类！', '1');
    }
  }

  // 根据前端传的id删除分类
  async delUserById() {
    const { ctx, service } = this;
    const id = ctx.request.body.id;
    console.log('----------id----------', id);
    const result = await service.category.del(id);
    if (result === 'Server error') this.error(0, result);
    this.success(1, result);
  }

  // 修改分类数据
  async edit() {
    const { ctx, service } = this;
    const { id, name, creartor_id } = ctx.request.body;
    const result = await service.permission.edit({ id, name, creartor_id });
    if (result === 'Server error') this.error(0, result);
    this.success(1, result);
  }


}

module.exports = CategoryController;
