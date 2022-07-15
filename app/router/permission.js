/*
 * @Description: category
 * @Date: 2022-06-28 17:02:52
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-15 17:08:42
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/api/permission/getRoleList', jwt, controller.permission.findAll);
  router.post('/api/permission/addRole', jwt, controller.permission.addRole);
  router.post('/api/permission/delrole', jwt, controller.permission.delUserById);
  router.post('/api/permission/editRole', jwt, controller.permission.edit);

};
