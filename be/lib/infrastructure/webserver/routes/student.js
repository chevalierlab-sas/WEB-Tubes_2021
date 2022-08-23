'use strict'

const express = require('express')
const router = express.Router()
const StudentController = require('../../../interfaces/controllers/StudentController')
const CreateStudentRequest = require('../../security/request/student/CreateStudentRequest')
const UpdateStudentRequest = require('../../security/request/student/UpdateStudentRequest')

router.get('/', StudentController.listStudents)
router.post('/', CreateStudentRequest, StudentController.createStudent)
router.get('/:studentId', StudentController.getStudent)
router.put('/:studentId', UpdateStudentRequest, StudentController.updateStudent)
router.delete('/:studentId', StudentController.deleteStudent)

module.exports = router