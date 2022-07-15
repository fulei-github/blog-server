/*
 * @Description: category
 * @Date: 2022-06-28 17:02:52
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-16 00:47:29
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/api/article/getArticle', controller.article.findAll);
  router.post('/api/article/addArticle', jwt, controller.article.addArticle);
  router.post('/api/article/delArtById', jwt, controller.article.delArtById);
  router.post('/api/article/getDetail', controller.article.findById);
  // router.post('/api/article/editRole', jwt, controller.permission.edit);

};
