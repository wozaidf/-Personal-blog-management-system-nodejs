const fs = require('fs')
const path = require('path')
//引入同步读取文件
const { readFileSync } = require('fs')
// const filepath = path.join(__dirname, './md')
const imagespath = path.join(__dirname, './img')
//一、异步读取文件
//fs.open
fs.open(imagespath, (err, fd) => {
    if (err) {
        console.log(err)
    }
    //fs.read
    //fd表示文件的索引
    //byteRead表示buffer位数
    //buffer为缓存区
    // fs.read(fd, (err, byteRead, buffer) => {
    //     // console.log(err)
    //     // console.log(byteRead)
    //     // //utf-8为编码格式
    //     // console.log(buffer)
    //     console.log(buffer.toString('base64'))
    // })
})
//二、同步读取文件
const resultbuffer = readFileSync(imagespath)
console.log(resultbuffer.toString('base64'))


