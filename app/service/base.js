/*
 * @Description: 常用公共方法
 * @Date: 2022-06-30 15:29:41
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-15 17:24:58
 */
'use strict';

const Service = require('egg').Service;

class BaseService extends Service {
  // 查询数据
  async _findAll(modelName, req) {
    const { ctx } = this;
    try {
      const limit = req.rows * 1;
      const offset = (req.page - 1) * limit;
      let result;
      if (isNaN(limit) && isNaN(offset)) {
        result = await ctx.model[modelName].findAll({ order: [[ 'id', 'ASC' ]] });
      } else {
        result = await ctx.model[modelName].findAll({ order: [[ 'id', 'ASC' ]], offset, limit });
      }
      return result;
    } catch (error) {
      console.log(error);
      return 'Server error';
    }
  }

  // 查询数据总数
  async _count(modelName) {
    const { ctx } = this;
    try {
      return await ctx.model[modelName].count();
    } catch (error) {
      return 'Server error';
    }
  }

  // 根据ID查询数据
  async _findById(modelName, id) {
    const { ctx } = this;
    try {
      const result = await ctx.model[modelName].findByPk(id);
      return result;
    } catch (error) {
      return 'Server error';
    }
  }

  // 新增数据
  async _add(modelName, json, msg) {
    const { ctx } = this;
    try {
      console.log('------json------', modelName, json, msg);
      await ctx.model[modelName].create(json);
      console.log('-----------msg', msg);
      return msg;
    } catch (error) {
      return 'Server error';
    }
  }

  // 编辑数据
  async _edit(modelName, json) {
    const { ctx } = this;
    try {
      const result = await ctx.model[modelName].findByPk(json.id);
      if (!result) return false;
      await result.update({ ...json });
      return true;
    } catch (error) {
      return 'Server error';
    }
  }

  // 删除数据
  async _delete(modelName, key) {
    const { ctx } = this;
    try {
      const result = await ctx.model[modelName].findByPk(key);
      if (!result) return false;
      await result.destroy();
      return '删除成功！';
    } catch (error) {
      return 'Server error';
    }
  }
}

module.exports = BaseService;
