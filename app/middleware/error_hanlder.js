/*
 * @Description: error
 * @Date: 2022-06-29 10:33:55
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-30 16:49:17
 */
'use strict';

module.exports = () => {
  return async function errorHanlder(ctx, next) {
    try {
      await next();
    } catch (error) {
      console.log('errorerrorerrorerror', error);
      // 记录日志用
      ctx.app.emit('error', error, ctx);
      // 同一异常返回
      ctx.body = {
        msg: 'error',
        data: error.message,
      };
      // ctx.status = error.status;
      // ctx.body = {
      //   msg: 'error',
      //   data: error.message,
      // };
      // if (error.status === 422) {
      //   ctx.body = {
      //     msg: 'error',
      //     data: error.message,
      //   };
      // }
    }
  };
};

