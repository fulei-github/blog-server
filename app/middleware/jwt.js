/*
 * @Description:只有登录接口不用token
 * @Date: 2022-06-30 17:15:18
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-30 18:15:14
 */

module.exports = () => {
  return async function(ctx, next) {
    // 拿到前端传过来的 token
    const token = ctx.request.header.authorization;
    if (token) {
      // 解密token
      const secret = ctx.app.config.jwt.secret;
      const decoded = ctx.app.jwt.verify(token, secret) || 'false';
      if (decoded !== 'false') {
        await next();
      } else {
        ctx.throw(401, '无效Token');
      }
    } else {
      ctx.throw(401, '无Token');
    }
  };
};
