const fs = require('fs')
const path = require('path')
//可读流
const steam = fs.createReadStream(path.join(__dirname, './mpa.mp4'))
steam.on('data', (data) => {
    console.log(data)
    console.log(data.length)
})

steam.on('end', () => {
    console.log('读取完成');
})