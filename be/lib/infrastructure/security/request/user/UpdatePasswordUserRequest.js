const { checkSchema }  = require('express-validator')
const CheckValidation = require('../../CheckValidation')

module.exports = [
    checkSchema({
        password: {
            in: ['body'],
            notEmpty: {
                errorMessage: "password is required"
            },
            isLength: {
                options: {
                    min: 1,
                    max: 100
                },
                errorMessage: "password length min 1, max 100"
            }
        },
    }),
    CheckValidation
]