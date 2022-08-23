'use strict'

const serviceLocator = require('../service-locator')
const ListStudent = require('../../application/use_cases/student/ListStudent');
const CreateStudent = require('../../application/use_cases/student/CreateStudent');
const GetStudent = require('../../application/use_cases/student/GetStudent');
const UpdateStudent = require('../../application/use_cases/student/UpdateStudent');
const DeleteStudent = require('../../application/use_cases/student/DeleteStudent');
const responseHandler = require('../../infrastructure/helpers/ResponseHandler')

module.exports = {

    async listStudents(req, res) {

        // Treatment
        const students = await ListStudent(serviceLocator);
        const data = students.map(serviceLocator.studentSerializer.serialize)

        // Output
        return responseHandler.success(res, {
            message: "Success get all student",
            data: data
        })
    },

    async createStudent(req, res) {
        // input
        const { fullname, email, phone_number, address } = req.body

        // Treatment
        const student = await CreateStudent(fullname, email, phone_number, address, serviceLocator);
        const data = serviceLocator.studentSerializer.serialize(student)

        // Output
        return responseHandler.success(res, {
            code: 201,
            message: "Success create student",
            data: data
        })
    },

    async getStudent(req, res) {
        // input
        const studentId = req.params.studentId

        // Treatment
        const student = await GetStudent(studentId, serviceLocator);
        if (!student) return responseHandler.error404(res, {
            message: "student not found"
        })
        const data = serviceLocator.studentSerializer.serialize(student)

        // Output
        return responseHandler.success(res, {
            message: "Success get student",
            data: data
        })
    },

    async updateStudent(req, res) {
        // input
        const studentId = req.params.studentId
        const { fullname, email, phone_number, address } = req.body

        // Treatment
        const student = await UpdateStudent(studentId, fullname, email, phone_number, address, serviceLocator);
        if (!student) return responseHandler.error404(res, {
            message: "student not found"
        })
        const data = serviceLocator.studentSerializer.serialize(student)

        // Output
        return responseHandler.success(res, {
            message: "Success update student",
            data: data
        })
    },

    async deleteStudent(req, res) {
        // input
        const studentId = req.params.studentId

        // Treatment
        const student = await DeleteStudent(studentId, serviceLocator);
        if (!student) return responseHandler.error404(res, {
            message: "student not found"
        })

        // Output
        return responseHandler.success(res, {
            message: "Success delete student"
        })
    },
}