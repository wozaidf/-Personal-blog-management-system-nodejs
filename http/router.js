// 这个地方还需要匹配方法，方法匹配上才能调用处理函数，否则返回未匹配的路径提示
const router = {
    '/': function (response, params) {
        console.log('params', params)
        response.end('hello world')
    },
    '/login': function (res, param) {
        res.end('this is mock')
    }
}

module.exports = {
    router
}