// __dirname 静态的
// cwd 是动态的，根据进程走的

const a = process.cwd() // 进程启动的目录

const b = process.env // 环境变量

const c = process.argv // 命令行参数
console.log(a)
console.log(b)
console.log(c)