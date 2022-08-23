'use strict'


const Student = require('../../domain/Student')
const StudentRepository = require('../../domain/StudentRepository')
const Model = require('../database/orm/sequilize/models/index')

module.exports = class extends StudentRepository {
    constructor() {
        super();
        this.model = Model.Student
    }

    async persist(studentEntity) {
        const { fullname, email, phone_number, address } = studentEntity;
        const seqStudent = await this.model.create({ fullname, email, phone_number, address });
        await seqStudent.save();
    
        return new Student(seqStudent.id, seqStudent.fullname, seqStudent.email, seqStudent.phone_number, seqStudent.address);
    }

    async merge(studentEntity) {
        const seqStudent = await this.model.findByPk(studentEntity.id);
    
        if (!seqStudent) return false;
    
        const { fullname, email, phone_number, address } = studentEntity;
        await seqStudent.update({ fullname, email, phone_number, address });
    
        return new Student(seqStudent.id, seqStudent.fullname, seqStudent.email, seqStudent.phone_number, seqStudent.address);
    }
    
    async remove(studentId) {
        const seqStudent = await this.model.findByPk(studentId);
        if (seqStudent) {
            return seqStudent.destroy();
        }
        return false;
    }

    async get(studentId) {
        const seqStudent = await this.model.findByPk(studentId);
        if (!seqStudent) return false;
        return new Student(seqStudent.id, seqStudent.fullname, seqStudent.email, seqStudent.phone_number, seqStudent.address);
    }

    async find() {
        const seqStudents = await this.model.findAll();
        return seqStudents.map((seqStudent) => {
            return new Student(seqStudent.id, seqStudent.fullname, seqStudent.email, seqStudent.phone_number, seqStudent.address);
        });
    }
}