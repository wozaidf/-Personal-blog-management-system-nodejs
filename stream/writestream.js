const fs =require('fs')
const path =require('path')

const steam = fs.createReadStream(path.join(__dirname,'./mpa.mp4'))
//创造一个可写流，写入目标文件中
const writesteam = fs.createWriteStream(path.join(__dirname,'./xie.mp4'))

//边读边写
// steam.on('data',(data)=>{
//     console.log(data)
//     writesteam.write(data)
// })
//将steam和writestream建立一个管道
steam.pipe(writesteam)

//监听最后写完
steam.on('end',()=>{
    console.log('写入完成')
})