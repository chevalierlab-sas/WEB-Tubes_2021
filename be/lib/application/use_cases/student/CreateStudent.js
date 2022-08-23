'use strict'

const Student = require("../../../domain/Student")

module.exports = (fullname, email, phone_number, address, { studentRepository }) => {
    const student = new Student(null, fullname, email, phone_number, address);
    return studentRepository.persist(student);
};