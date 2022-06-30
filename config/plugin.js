/*
 * @Description:引入插件
 * @Date: 2022-06-30 15:05:49
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-30 17:11:00
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 引入egg-sequelize包
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  // 引入egg-cors包
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // 校验请求的参数
  valparams: {
    enable: true,
    package: 'egg-valparams',
  },
  // token登录鉴权
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
};
