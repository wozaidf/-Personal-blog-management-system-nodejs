//创建服务器
//引入http模块
const http = require('http')

const serve = http.createServer((request, response) => {
    //在这个函数里面处理请求和响应
    //1.请求
    //从request拿到请求，可以操作请求
    //2.响应
    //从response操作响应，可以操作响应
    // console.log(request.url,request.method)
    // response.end('hello zy')


    //用nodejs实现后端想要获取查询参数
    // const queryParams = request.url.split('?')
    // if (queryParams.length <= 1) {
    //     response.end('I can not fond')
    // } else {
    //     // "name=1, password=123456"
    //     const queryParamsArr = JSON.stringify(queryParams[1].split('&').map((item) => {
    //         const tempKeyVlue = item.split('=')//['name', '1']
    //         return { [tempKeyVlue[0]]: tempKeyVlue[1] }
    //     }))
    //     response.end(queryParamsArr)
    // }

    //二、后端router
    const urlData = parserUrl(request.url)
    const aimController = router[urlData.path]
    if (aimController) {
        aimController(response, urlData.params)
    } else {
        response.end('no match handle function for this url!')
    }

});


function parserUrl(url) {
    const queryParams = url.split('?')
    let params = null

    if (queryParams.length > 1) {
        params = queryParams[1].split('&').map((item) => {
            const tempKeyVlue = item.split('=') // ['name', '1']
            return { [tempKeyVlue[0]]: tempKeyVlue[1] }
        })
    }
    return {
        path: queryParams[0],
        params,
    }
}

serve.listen(8080)
// serve.listen(8080, '10.3.25.141')