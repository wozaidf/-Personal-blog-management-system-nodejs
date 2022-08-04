//处理数据
const { getUserById } = require('../database/databases2.js')
async function getUserInfoByUserName(username, password) {
    const rows = await getUserById(username)
    //调用getUserById函数会去数据库中查找用户输入的名字是否存在数据库中，如果没有则返回为空数组
    if (rows.length !== 1) {
        return null
    }
    //有用户的名字就去数据库中找用户的密码是否与输入的密码一致
    const user = rows[0]
    //前一个password为数据库中存入的密码，后一个password为用户输入的密码
    if (user.password === password) {
        return user;
    }
    return null;
    // if(User[username] && User[username].password === password){
    //     // console.log('a')
    //     return User[username];
    // }
    // return null;
}
module.exports = {
    getUserInfoByUserName
}