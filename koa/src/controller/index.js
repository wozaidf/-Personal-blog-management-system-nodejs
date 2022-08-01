const { getUserInfoByUserName } = require('../service/index')
//承接请求，回应请求（这个文件的作用）
function LoginController(ctx) {
    //从请求头部拿到查询参数(ctx.query)
    // const username = ctx.query.username
    // const password = ctx.query.password
    //以上简化为
    const { username, password } = ctx.query
    // console.log(username, password)
    //检验有否能接受客户端
    // console.log(ctx.query)
    //用数据库里的内容判断用户是否输入正确
    const userInfo =getUserInfoByUserName(username, password)
    if (userInfo) {
        ctx.body = {
            success: true,
            data:userInfo
        }
    } else {
        ctx.body = {
            success: false,
            data: {
                msg: '此用户不存在'
            }
        }
    }
}
module.exports = {
    LoginController
}