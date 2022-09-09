class CustomApiError {
  constructor (statusCode, message) {
    this.statusCode = statusCode
    this.message = message
  }
  
  static notFound (msg) {
    return new CustomApiError(404, msg)
  }
  static internal (msg) {
    return new CustomApiError(500, msg)
  }
}

export default CustomApiError