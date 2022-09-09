import CustomApiError from '../errors/CustomApiError.js'

const apiErrorHandler = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    res.status(err.statusCode).json(err.message)
    return
  }
  res.status(500).json('Internal Server Error')
}

export default apiErrorHandler