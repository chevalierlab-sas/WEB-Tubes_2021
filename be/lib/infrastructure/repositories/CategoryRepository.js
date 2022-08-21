'use strict'


const Category = require('../../domain/Category')
const CategoryRepository = require('../../domain/CategoryRepository')
const Model = require('../database/orm/sequilize/models/index')

module.exports = class extends CategoryRepository {
    constructor() {
        super();
        this.model = Model.Category
    }

    async persist(categoryEntity) {
        const { name } = categoryEntity;
        const seqCategory = await this.model.create({ name });
        await seqCategory.save();
    
        return new Category(seqCategory.id, seqCategory.name);
    }

    async merge(categoryEntity) {
        const seqCategory = await this.model.findByPk(categoryEntity.id);
    
        if (!seqCategory) return false;
    
        const { name } = categoryEntity;
        await seqCategory.update({ name });
    
        return new Category(seqCategory.id, seqCategory.name);
    }
    
    async remove(categoryId) {
        const seqCategory = await this.model.findByPk(categoryId);
        if (seqCategory) {
            return seqCategory.destroy();
        }
        return false;
    }

    async get(categoryId) {
        const seqCategory = await this.model.findByPk(categoryId);
        console.log(!seqCategory ? "tidak ada" : "ada");
        if (!seqCategory) return false;
        return new Category(seqCategory.id, seqCategory.name);
    }

    async find() {
        const seqCategories = await this.model.findAll();
        return seqCategories.map((seqCategory) => {
            return new Category(seqCategory.id, seqCategory.name);
        });
    }
}