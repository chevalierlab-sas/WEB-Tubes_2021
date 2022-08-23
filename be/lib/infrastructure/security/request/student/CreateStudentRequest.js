const { checkSchema }  = require('express-validator')
const CheckValidation = require('../../CheckValidation')
const StudentModel = require('../../../database/orm/sequilize/models/Student')

module.exports = [
    checkSchema({
        fullname: {
            in: ['body'],
            notEmpty: {
                errorMessage: "fullname is required"
            },
            isLength: {
                options: {
                    min: 1,
                    max: 225
                },
                errorMessage: "name length min 1, max 225"
            }
        },
        email: {
            in: ['body'],
            notEmpty: {
                errorMessage: "email is required"
            },
            isLength: {
                options: {
                    min: 1,
                    max: 225
                },
                errorMessage: "email length min 1, max 225"
            },
            isEmail: true,
            custom: {
                options: async (value, {req}) => {
                    const count = await StudentModel.count({
                        distinct: true,
                        col: 'id',
                        where: {
                            email: value
                        }
                    })

                    if (count){
                        throw new Error('E-mail already in use')
                    }

                    return count
                }
            }
        },
        phone_number: {
            in: ['body'],
            notEmpty: {
                errorMessage: "phone_number is required"
            },
            isLength: {
                options: {
                    min: 1,
                    max: 15
                },
                errorMessage: "phone_number length min 1, max 15"
            },
            isNumeric: true
        },
        address: {
            in: ['body'],
            optional: true,
            isString: true
        }
    }),
    CheckValidation
]