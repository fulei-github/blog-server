/*
 * @Description: category
 * @Date: 2022-06-28 17:02:52
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-16 16:41:38
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  // 分类的controller
  router.post('/api/category/findAll', controller.category.findAll);
  router.post('/api/category/addCatgory', jwt, controller.category.addCatgory);
  router.post('/api/category/delCatgory', jwt, controller.category.delUserById);
  router.post('/api/category/editCatgory', jwt, controller.category.edit);
  // 文章的controller
};
