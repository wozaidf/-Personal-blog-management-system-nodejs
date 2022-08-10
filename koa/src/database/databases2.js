//引入mysql
const mysql = require('mysql2/promise')
const mysqlConfig = require('../../config.json')

//设计模式
//单例模式：避免用户多次请求数据库
let connection = null
async function getMysql() {
    if (connection) {
        return connection;
    }
    //连接数据库//连接外面文件的数据库：防止数据库泄露
    connection = await mysql.createConnection(mysqlConfig);
    return connection;

}
//对数据库进行操作sql语句
async function getUserById(username) {
    const ins = await getMysql();
    //因为返回的是数组形式，所以接收的时候也要用数组来接收
    const [row] = await ins.execute('select * from `user` where `username` = ?', [username])
    // console.log(row)
    // [ { username: 'lk', password: '200234', score: 23 } ]
    return row
}
// getUserById('lk')


module.exports = {
    getUserById
}