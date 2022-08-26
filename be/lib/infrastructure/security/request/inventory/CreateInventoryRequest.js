const { checkSchema }  = require('express-validator')
const CheckValidation = require('../../CheckValidation')
const CategoryModel = require('../../../database/orm/sequilize/models/Category')
const StudentModel = require('../../../database/orm/sequilize/models/Student')

module.exports = [
    checkSchema({
        category_id: {
            in: ['body'],
            notEmpty: {
                errorMessage: "category_id is required"
            },
            custom: {
                options: async (value, {req}) => {
                    const category = await CategoryModel.findByPk(value)

                    if (!category){
                        throw new Error('category_id is not exist')
                    }

                    return category
                }
            }
        },
        deposit_name: {
            in: ['body'],
            notEmpty: {
                if: (value, {req}) => {
                    return !(req.body.deposit_student_id != '' && req.body.deposit_student_id != null)
                },
                errorMessage: "deposit_student_id is required if deposit name is empty"
            },
            isLength: {
                if: value => {
                    return !value
                },
                options: {
                    min: 1,
                    max: 250
                },
                errorMessage: "deposit_name length min 1, max 250"
            }
        },
        deposit_student_id: {
            in: ['body'],
            optional: true,
            custom: {
                options: async (value, {req}) => {
                    const student = await StudentModel.findByPk(value)
                    if (!student){
                        throw new Error('student_id is not exist')
                    }

                    return student
                }
            }
        },
        item_name: {
            in: ['body'],
            notEmpty: {
                errorMessage: "item_name is required"
            },
            isLength: {
                options: {
                    min: 1,
                    max: 250
                },
                errorMessage: "item_name length min 1, max 250"
            }
        },
        description: {
            in: ['body'],
            optional: true,
            isLength: {
                options: {
                    min: 1
                },
                errorMessage: "description length min 1"
            }
        }
    }),
    CheckValidation
]