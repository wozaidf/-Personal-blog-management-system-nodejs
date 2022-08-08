const Router = require('@koa/router')
const router = new Router()
const {LoginController}=require('../controller/index')
const {uploadController}=require('../controller/upload')
router.get('/login',LoginController)
router.post('/load',uploadController)

module.exports={
    router
}