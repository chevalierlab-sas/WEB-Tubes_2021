const { checkSchema }  = require('express-validator')
const CheckValidation = require('../../CheckValidation')
const UserModel = require('../../../database/orm/sequilize/models/User')

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
        },
        username: {
            in: ['body'],
            notEmpty: {
                errorMessage: "username is required"
            },
            isLength: {
                options: {
                    min: 1,
                    max: 100
                },
                errorMessage: "username length min 1, max 100"
            },
            isAlpha: true,
            custom: {
                options: async (value, {req}) => {
                    const count = await UserModel.count({
                        distinct: true,
                        col: 'id',
                        where: {
                            username: value,
                            id: {
                                [Op.not]: req.params.userId
                            },
                        }
                    })

                    if (count){
                        throw new Error('username already in use')
                    }

                    return count
                }
            }
        },
    }),
    CheckValidation
]