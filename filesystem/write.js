//buffer不能存大文件
const fs = require('fs')
// const {writeFileSync} = require('fs')
const imagespath = require('path').join(__dirname, './img')
const aimpath = require('path').join(__dirname, './image2.png')

//fs.open
fs.open(imagespath, (err, fd) => {
    if (err) {
        console.log(err)
    }
    //fs.read
    //fd表示文件的索引
    //byteRead表示buffer位数
    //buffer为缓存区
    fs.read(fd, (err, byteRead, buffer) => {
        console.log(err)
        // console.log(byteRead)
        // console.log(buffer.toString('base64'))
        //fs.writeFile
        // console.log(buffer.toString('base64'))
        fs.writeFile(aimpath, buffer, (err) => {
            console.log(err)
        })
        // writeFileSync(aimpath,buffer)
    })

})