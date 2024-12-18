export const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || 'Internal Server Error'

    res.status(err.statusCode).json({
        status: err.statusCode,
        message: err.message,
    })
}