const http = require('http')
const path = require('path')
const aimpdf1 = path.join(__dirname, './琵琶行.pdf')
// const aimpdf2 = path.join(__dirname, './致橡树.pdf')
// const aimpdf3 = path.join(__dirname, './春江花月夜.pdf')
const fs = require('fs')



const server = http.createServer((req, res) => {
    const downLoadStream = fs.createReadStream(aimpdf1)
    // if (req.url = '/all') {
    //     res.setHeader("content-Type", "text/html; charset=utf-8")
    //     res.end(JSON.stringify({
    //         0: '琵琶行'
    
    //     }))
    // }
    // res.setHeader('Content-Type', 'image/png/pdf')
    const fileInfo = fs.statSync(aimpdf1)
    res.setHeader('Content-Length', fileInfo.size)
    const fileName = '琵琶行'
    const fileNameURI = encodeURI(fileName)
    res.setHeader('Content-Disposition', `attachment;filename=${fileNameURI}.pdf`)
    res.setHeader('Content-Type', 'application/pdf')
    console.log('启动成功')
    downLoadStream.pipe(res)
})
server.listen(8080)