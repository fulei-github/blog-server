/*
 * @Description: 路由
 * @Date: 2022-06-30 15:05:49
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-30 15:46:07
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 用户的controller
  require('./router/user')(app);
};
