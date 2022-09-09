import express from 'express'
import axios from 'axios'

/*@dev::: Config */
const router = express.Router()

router.get('/', (req, res, next) => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
        response.data.forEach((e) => {delete e.userId})
        res.status(200).send(response.data)
    })
    .catch((err) => {
        /* @dev::: generic error message */
        next({})
    })
})

export default router