/*
 * @Description: category
 * @Date: 2022-06-28 17:02:52
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-28 22:18:36
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.post('/api/article/getArticle', controller.article.findAll);
  router.post('/api/article/addArticle', jwt, controller.article.addArticle);
  router.post('/api/article/delArtById', jwt, controller.article.delArtById);
  router.post('/api/article/getDetail', controller.article.findById);
  router.post('/api/article/getList', controller.article.findListById);
  router.post('/api/article/getCatList', controller.article.getArtById);
  router.post('/api/article/findListBySee', controller.article.findListBySee);
  // router.post('/api/article/editRole', jwt, controller.permission.edit);
};
