//引入mysql
const mysql = require('mysql2/promise')


//设计模式
//单例模式：避免用户多次请求数据库
let connection = null
async function getMysql() {
    if (connection) {
        return connection;
    }
    //连接数据库
    connection = await mysql.createConnection({
        host: '47.97.158.113',
        user: 'root',
        password: 'Lk200234520@',
        database: 'nodejs-mysql',
    });
    return connection;

}
//对数据库进行操作sql语句
async function getUserById(username) {
    const ins = await getMysql();
    //因为返回的是数组形式，所以接收的时候也要用数组来接收
    const [row] = await ins.execute(`select * from user where username = ?`, [username])
    console.log(row)
    return row
}
// getUserById('lk')


module.exports = {
    getUserById
}