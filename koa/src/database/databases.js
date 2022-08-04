//引入mysql
const mysql = require('mysql2')

//创建与服务器的连接
const connection = mysql.createConnection({
    host: '47.97.158.113',
    user: 'root',
    database: 'nodejs-mysql',
    password: 'Lk200234520@'
});

//执行sql语句
const sql = 'select * from user';
//这边有回调函数可以用promise
connection.execute(sql, (err, result) => {
    if (err) {
        console.error('error', err);
        return;
    }
    console.log('result', result);
})