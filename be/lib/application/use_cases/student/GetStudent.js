'use strict'

module.exports = (studentId, { studentRepository }) => {
    return studentRepository.get(studentId)
};