/*
 * @Description: category
 * @Date: 2022-06-28 17:02:52
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-13 15:02:22
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 分类的controller
  router.get('/api/category/findAll', controller.category.findAll);
  router.post('/api/category/addCatgory', controller.category.addCatgory);

};
