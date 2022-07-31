//1.文件路径
//path.join
//path.resolve
const path = require('path')
const aim= path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(aim)
//当前文件夹目录__dirname
//当前文件目录__filename
console.log(__dirname,__filename)
//拼接路径
const aimPath = path.join(__dirname,"lk/zy")
console.log(aimPath)
//文件的直接路劲
const resolveAimPAth = path.resolve('lk/ad')
console.log(resolveAimPAth)