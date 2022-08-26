const { checkSchema }  = require('express-validator')
const CheckValidation = require('../../CheckValidation')
const CategoryModel = require('../../../database/orm/sequilize/models/Category')
const StudentModel = require('../../../database/orm/sequilize/models/Student')

module.exports = [
    checkSchema({
        take_name: {
            in: ['body'],
            notEmpty: {
                if: (value, {req}) => {
                    return !(req.body.take_student_id != '' && req.body.take_student_id != null)
                },
                errorMessage: "take_student_id is required if take_name is empty"
            },
            isLength: {
                if: value => {
                    return !value
                },
                options: {
                    min: 1,
                    max: 250
                },
                errorMessage: "take_name length min 1, max 250"
            }
        },
        take_student_id: {
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
    }),
    CheckValidation
]