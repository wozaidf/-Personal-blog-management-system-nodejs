//入口文件
const path =require('path')
//引入koa创建服务器
const Koa = require('koa')
//引入router
// const Router = require('@koa/router')
// 引入数据库
// const { User } = require('./src/database/database案例')
// const router = new Router()
const server = new Koa();
//引用封装的router
const { router } = require('./src/router/index')
const {jwtValidateMd} = require('./src/middleware/jwt')


// router.post('/login', (ctx) => {
//     //从请求头部拿到查询参数(ctx.query)
//     // const username = ctx.query.username
//     // const password = ctx.query.password
//     //以上简化为
//     const { username, password } = ctx.query
//     // console.log(username, password)
//     //检验有否能接受客户端
//     // console.log(ctx.query)
//     //用数据库里的内容判断用户是否输入正确
//     if (User[username] && User[username].password === password) {
//         ctx.body = {
//             success: true,
//             data: User[username]
//         }
//     } else {
//         ctx.body = {
//             success: false,
//             data: {
//                 msg: '此用户不存在'
//             }
//         }
//     }
// })

//引入koa/cors：用于解决跨域问题
const cors = require('@koa/cors');
const koaBody = require('koa-body');
//使用cors
server.use(cors())
//中间件
server.use(jwtValidateMd)
//koa-body用于接收form-data文件
server.use(koaBody({
    multipart: true,
    encoding: 'utf-8',
    formidable: {
        uploadDir: path.join(process.cwd()),  // 上传目录, 默认放置于启动程序的根目录
        keepExtensions: true, // 保持文件的后缀
        maxFieldsSize: 10485760 // 默认文件大小10mb
    }
}))
// 调⽤router.routes()来组装匹配好的路由，返回⼀个合并好的中间件
// 调⽤router.allowedMethods()获得⼀个中间件，当发送了不符合的请求时，会返回 `405 Method Not Allowed` 或 `501 Not Implemented`
server
    .use(router.routes())
    .use(router.allowedMethods())

// server.use( ctx => {
//   ctx.body = 'Hello zy';
// });

server.listen(8081, () => { console.log('服务器已开启') }) //本地IP地址
