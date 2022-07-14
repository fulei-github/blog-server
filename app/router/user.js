/*
 * @Description: user
 * @Date: 2022-06-28 17:02:52
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-14 23:31:55
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  // 引入鉴权
  // const jwt = middleware.jwt(app.config.jwt);
  // 用户的controller
  router.post('/api/user/createUser', controller.user.createUser);

  // 用户登录、获取用户信息
  router.post('/api/user/login', controller.auth.login);
  router.get('/api/user/getUserInfo', jwt, controller.auth.getUserInfo);
  router.post('/api/user/findAll', jwt, controller.user.findAll);
  router.post('/api/user/findUserByReq', jwt, controller.user.findUserByReq);
  router.post('/api/user/delUserById', jwt, controller.user.delUserById);

};
