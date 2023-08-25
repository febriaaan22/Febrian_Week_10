require('dotenv').config()

const express = require('express')
const databaseMiddleware = require('./middleware/database-middleware.js')
const transferRouter = require('./routes/transferRouter.js')
const userRouter = require('./routes/userRouter.js')
const authMiddleware = require('./middleware/authentication-middleware.js')

const app = express()

app.use(express.json())
app.use(databaseMiddleware)

app.get('/', (req, res)=> {
    res.send('Assignment Week 10')
});
app.use('/', authMiddleware, transferRouter)
app.use('/', userRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})