/*
 * @Description: 分类 category 表结构
 * @Date: 2022-06-28 17:57:44
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-16 00:16:41
 */
'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Article = app.model.define('article', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    author: { type: STRING(200), allowNull: false },
    content: { type: STRING(200), allowNull: false },
    title: { type: STRING(200), allowNull: false },
    user_id: { type: STRING(200), allowNull: false },
    article_views: { type: STRING(200), allowNull: true },
    article_thumbs: { type: STRING(200), allowNull: true },
    catgory: { type: STRING(200), allowNull: false },
    created_at: DATE,
    updated_at: DATE,
    deleted_at: DATE,
  });

  return Article;
};
