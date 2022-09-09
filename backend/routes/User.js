import express from 'express'
import axios from 'axios'
import CustomApiError from '../errors/CustomApiError.js'

/*@dev::: Config */
const router = express.Router()

router.get('/:userId', (req, res, next) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${req.params.userId}`)
    .then((response) => {
        let newObj = Object.keys(response.data)
        .filter(key => key != "username" && key != "address" && key != "website" && key != "company")
        .reduce((acc, key) => {
        acc[key] = response.data[key];
        return acc;
        }, {})
        return newObj
    })
    .then((resp) => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            const userTodo = response.data.filter(e => e.userId == req.params.userId)
            // console.log(userTodo)
            resp.todos = userTodo
            res.status(200).send(resp)
        })
        .catch((err) => {
            /* @dev::: expected error message */
            next(CustomApiError.notFound('requested page not found !'))
            return
        })
    })
    .catch((err) => {
        /* @dev::: generic error message for any unexpected error */
        next({})
    })
})

export default router