/*
 * @Description:  permission 表结构
 * @Date: 2022-06-28 17:57:44
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-15 00:01:04
 */
'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Permission = app.model.define('permission', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    // creartor_id: { type: INTEGER },
    permission: { type: STRING(200), allowNull: false, defaultValue: '', comment: '角色名称', unique: true },
    created_at: DATE,
    updated_at: DATE,
    deleted_at: DATE,
  });

  return Permission;
};
