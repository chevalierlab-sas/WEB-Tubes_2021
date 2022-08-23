'use strict'


module.exports = (studentId, { studentRepository }) => {
    return studentRepository.remove(studentId);
};