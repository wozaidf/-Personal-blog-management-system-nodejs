const { User } = require('../database/database')
function getUserInfoByUserName(username, password) {
    if(User[username] && User[username].password === password){
        return User[username];
    }
    return null;
}
module.exports = {
    getUserInfoByUserName
}