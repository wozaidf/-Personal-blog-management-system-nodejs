// const arr ="name=1, password=123456"
// const aim =arr.split('=')
// console.log(aim)

// const a = {[aim[0]]:aim[1]}
// const b = JSON.stringify(a)
// console.log(a)
// console.log(b)
const User = {
    lk: {
        age: 20,
        skill: 'happy',
        language: 'cn',
        password:'123'
    },
    zy: {
        age: 19,
        skill: 'happy',
        language: 'cn',
        password:'2002'
    }
}
console.log(User['lk'])