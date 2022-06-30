/*
 * @Description: 配置插件
 * @Date: 2022-06-30 15:05:49
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-30 17:11:53
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1656572640787_1939';

  // add your middleware config here
  config.middleware = [ 'error' ];
  config.error = {
    // 这里使用appInfo.env来判断环境，仅仅在非生产环境下打开堆栈信息，用于调试
    postFormat: rest => rest,
  };
  config.jwt = {
    secret: 'fulei+_hello!225', // 可自行定义
  };
  // 校验请求的参数
  config.valparams = {
    locale: 'zh-cn',
    throwError: true,
  };
  /* 取消安全证书验证，关闭crsf,开启跨域 */
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ], // 白名单
  };
  /* 配置允许跨域 */
  config.cors = {
    credentials: true,
    origin: '*', // 允许任何跨域，若只允许个别IP跨域，则：origin:['http://localhost:8080']
    allowMethods: 'GET,PUT,POST,DELETE', // 被允许的请求方式
  };
  /* 连接mysql配置 */
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '123456',
    port: 3306,
    database: 'database',
    // 中国时区
    timezone: '+08:00',
    define: {
      // 取消数据表名复数
      freezeTableName: true,
      // 自动写入时间戳 created_at updated_at
      timestamps: true,
      // 字段生成软删除时间戳 deleted_at
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      // 所有驼峰命名格式化
      underscored: true,
    },
  };

  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
