'use strict'

const Student = require("../../../domain/Student")

module.exports = (id, fullname, email, phone_number, address, { studentRepository }) => {
    const student = new Student(id, fullname, email, phone_number, address);
    return studentRepository.merge(student);
};