const aimArgv = process.argv.slice(2,4)
console.log(+aimArgv[0]+ + aimArgv[1])
//输入node process.js 1 4
//结果为5

const aimArgv2 = process.argv
console.log(aimArgv2[0])
console.log(aimArgv2[1])
//C:\Program Files\nodejs\node.exe
//C:\Users\Administrator\Desktop\a\process\process.js