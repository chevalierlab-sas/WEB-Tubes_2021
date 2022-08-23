'use strict';

const _serializeSingleStudent = (student) => {
    return {
        id: student.id,
        fullname: student.fullname,
        email: student.email,
        phone_number: student.phone_number,
        address: student.address,
    };
};

module.exports = class {

    serialize(data) {
        if (!data) {
        throw new Error('Expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
        return data.map(_serializeSingleStudent);
        }
        return _serializeSingleStudent(data);
    }

};