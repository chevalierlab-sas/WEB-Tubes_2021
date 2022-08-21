exports.success = (res, payload = {}) => {
    const code = payload.code ?? 200
    const response = {
        message: '',
    }

    if (payload.message) response.message = payload.message
    if (payload.data) response.data = payload.data

    return res.status(code).json(response)
}

exports.error = (res, payload = {}) => {
    const code = payload.code ?? 400
    const response = {
        message: '',
    }

    // if (payload.code) code = payload.code
    if (payload.message) response.message = payload.message
    if (payload.error) response.error = payload.error

    return res.status(code).json(response)
}


exports.error404 = (res, payload = {}) => {
    const response = {
        message: 'request not found'
    }
    if(payload.message) response.message = payload.message
    return res.status(404).json(response)
}