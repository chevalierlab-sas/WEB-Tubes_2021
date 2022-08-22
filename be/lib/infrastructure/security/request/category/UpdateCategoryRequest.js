const { checkSchema }  = require('express-validator')
const CheckValidation = require('../../CheckValidation')

module.exports = [
    checkSchema({
        name: {
            in: ['body'],
            notEmpty: {
                errorMessage: "name is required"
            },
            isLength: {
                options: {
                    min: 1,
                    max: 100
                },
                errorMessage: "name length min 1, max 100"
            }
        }
    }),
    CheckValidation
]