const Router = require('@koa/router')
const router = new Router()
const {LoginController}=require('../controller/index')

router.post('/login',LoginController)

module.exports={
    router
}