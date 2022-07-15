/*
 * @Description: category
 * @Date: 2022-06-28 17:02:52
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-15 20:25:50
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  // 分类的controller
  router.get('/api/category/findAll', jwt, controller.category.findAll);
  router.post('/api/category/addCatgory', jwt, controller.category.addCatgory);
  router.post('/api/category/delCatgory', jwt, controller.category.delUserById);
  // 文章的controller
};
