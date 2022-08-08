const JwtToken = require('jsonwebtoken')
const secret = 'miyao'
const whiteList = ['/login']
async function jwtValidateMd(ctx, next) {
    //前端的token在ctx.headers上
    // console.log(ctx.headers.token)
    //分割url，取前一个数组值
    const url = ctx.url.split('?')[0]
    //在这个中间件中判断前端请求带来的token是否能够解析成功即jwtDecodeSv带密钥解析的对象存在，所以要先把用户登入的url排除，因为用户在登入时没有token
    if (whiteList.includes(url)) {
        await next();
    } else {
        //取请求中的token
        const token = ctx.headers.token
        // console.log(token)
        //判断token是否解析成功
        if (jwtDecodeSv(token, secret)) {
            console.log(jwtDecodeSv(token, secret))
            await next();
        } else {
            console.log('haha')
            ctx.body = {
                success: false,
                msg: 'token校验失败'
            }
        }

    }
}



//contxt是payload:用于存储主体信息的，如用户信息
//secret是加密的密钥
//建立一个生成jwt的函数
function JwtCreate(contxt) {
    return tokenCreate = JwtToken.sign({ ...contxt, exp: Math.floor(Date.now() / 1000) + 100 * 100 },secret)
}
//生成jwt的内容，用户携带的信息
// const contxt = { name: 'lk', age: 20, id: 2002 }

// const token = JwtCreate(contxt, secret)
// //打印出
// console.log(token)

//解析token
function jwtDecodeSv(token) {
        // const data = JwtToken.verify(token, secret)
        // return data
        try {
            //如果有token解析错误，不应该直接报错导致程序崩了
            const data = JwtToken.verify(token, secret)
            console.log(data)
            return data
        } catch (err) {
            //有错误在这给我报出来，我的程序继续执行
            console.log('ERROR',err)
            return null
        }
}

// const result = jwtDecodeSv(token, secret)
// console.log(result)

module.exports = {
    jwtValidateMd,
    JwtCreate
}


