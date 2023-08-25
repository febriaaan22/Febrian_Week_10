const { Router } = require('express')
const { getAllTransfers, createTransfers, updateTransfers } = require('../Service/transferService.js')
const { authorizationMiddleware } = require('../middleware/authorization-middleware.js')

const transferRouter = Router()

transferRouter.get('/transfer', authorizationMiddleware, getAllTransfers)
transferRouter.post('/transfer', authorizationMiddleware, createTransfers)
transferRouter.patch('/transfer/:id', authorizationMiddleware, updateTransfers)

module.exports = transferRouter