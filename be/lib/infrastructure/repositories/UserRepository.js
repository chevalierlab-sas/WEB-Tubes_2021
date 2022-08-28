'use strict';

const UserRepository = require('../../domain/UserRepository')
const Model = require('../database/orm/sequilize/models/index')
const User = require('../../domain/User');

module.exports = class extends UserRepository {
    constructor() {
        super();
        this.model = Model.User;
    }

    async persist(userEntity) {
        const { name, username, password } = userEntity;
        const seqUser = await this.model.create({ name, username, password });
        await seqUser.save();

        return new User(seqUser.id, seqUser.name, seqUser.username, seqUser.password, seqUser.role);
    }

    async merge(userEntity) {
        const seqUser = await this.model.findByPk(userEntity.id);

        if (!seqUser) return false;

        const { name, username } = userEntity;
        await seqUser.update({ name, username });

        return new User(seqUser.id, seqUser.name, seqUser.username, null, seqUser.role);
    }

    async updatePassword(userEntity) {
        const seqUser = await this.model.findByPk(userEntity.id);

        if (!seqUser) return false;

        const { password } = userEntity;
        await seqUser.update({ password });

        return new User(seqUser.id, seqUser.name, seqUser.username, seqUser.password, seqUser.role);
    }

    async remove(userId) {
        const seqUser = await this.model.findOne({
            where: {
                id: userId,
                role: 'admin'
            }
        });
        if (seqUser) {
        return seqUser.destroy();
        }
        return false;
    }

    async get(userId) {
        const seqUser = await this.model.findByPk(userId);
        if (!seqUser) return false;
        return new User(seqUser.id, seqUser.name, seqUser.username, seqUser.password, seqUser.role);
    }

    async getByUsername(username) {
        const seqUser = await this.model.findOne({ where: { username: username } });
        return new User(seqUser.id, seqUser.name, seqUser.username, seqUser.password, seqUser.role);
    }

    async find() {
        const seqUsers = await this.model.findAll();
        return seqUsers.map((seqUser) => {
            return new User(seqUser.id, seqUser.name, seqUser.username, seqUser.password, seqUser.role);
        });
    }
};