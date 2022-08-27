const response = require('./responseHandler')

module.exports = (callback) => async (req, res, next) => {
    try {
        await callback(req, res, next);
    } catch (error) {
        return response.error(res, {
            message: "Terjadi error",
            error
        })
    }
}