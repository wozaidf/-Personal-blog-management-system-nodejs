const fs = require('fs')
async function uploadController(ctx) {
    //用ctx.body向前端发响应值
    // ctx.body = '接收到我的响应值了吧'
    //在ctx上取到前端发来的文件
    // ctx.req.on('data', (data) => {
    //     //不加toString默认是butter格式（16进制），内存小、加了之后不给参数默认是请求发来文件的格式、参数是base64是字符串格式、参数是utf-8也是默认请求发来文件的格式
    //     console.log(data.toString('base64'))
    // })
    // ctx.req.pipe(fs.createWriteStream('./loadhouse.png'))
    // //将收到的文件存入本地
    // ctx.req.on('end', () => {
    //     console.log('文件读取完成')
    // })
    // console.log(ctx.request.body)
    // console.log(ctx.request.files)
    //将request上的body部分传入给响应
    ctx.body = ctx.request.body
    ctx.body = ctx.request.files

}

module.exports = {
    uploadController
}