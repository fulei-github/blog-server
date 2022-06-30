/*
 * @Description: user表结构
 * @Date: 2022-06-28 17:57:44
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-30 15:28:08
 */
'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: STRING(30), allowNull: false, defaultValue: '', comment: '用户名称', unique: true },
    password: { type: STRING(200), allowNull: false, defaultValue: '' },
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE,
    deleted_at: DATE,
  });

  return User;
};
