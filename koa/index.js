//引入koa创建服务器
const Koa = require('koa')
//引入router
const Router = require('@koa/router')
// 引入数据库
const { User } = require('./src/database/database')
const router = new Router()
const server = new Koa();


router.post('/login', (ctx) => {
    //从请求头部拿到查询参数(ctx.query)
    // const username = ctx.query.username
    // const password = ctx.query.password
    //以上简化为
    const { username, password } = ctx.query
    // console.log(username, password)
    //检验有否能接受客户端
    // console.log(ctx.query)
    //用数据库里的内容判断用户是否输入正确
    if (User[username] && User[username].password === password) {
        ctx.body = {
            success: true,
            data: User[username]
        }
    } else {
        ctx.body = {
            success: false,
            data: {
                msg: '此用户不存在'
            }
        }
    }
})


server
    .use(router.routes())
    .use(router.routes())

// server.use( ctx => {
//   ctx.body = 'Hello zy';
// });

server.listen(8080)
