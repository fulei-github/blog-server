/*
 * @Description: 分类 category 表结构
 * @Date: 2022-06-28 17:57:44
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-01 15:18:42
 */
'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Category = app.model.define('category', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    creartor_id: { type: INTEGER },
    name: { type: STRING(200), allowNull: false, defaultValue: '', comment: '分类名称', unique: true },
    created_at: DATE,
    updated_at: DATE,
    deleted_at: DATE,
  });

  return Category;
};
