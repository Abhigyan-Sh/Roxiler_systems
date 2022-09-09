import express from 'express'
import dotenv from 'dotenv'
import Todos from './routes/Todos.js'
import User from './routes/User.js'
import apiErrorHandler from './middleware/apiErrorHandler.js'

/*@dev::: Config */
dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(express.json()) // later to accept requests from frontend

/*@dev::: routes */
app.use('/todos', Todos)
app.use('/user', User)

app.get('/', (req, res) => {
    res.status(200).send('The server is Live!')
})

app.use(apiErrorHandler)

app.listen(PORT, () => console.log(`server is running on PORT: ${PORT}`))