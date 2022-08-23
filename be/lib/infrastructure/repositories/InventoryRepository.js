'use strict'


const Inventory = require('../../domain/Inventory')
const InventoryRepository = require('../../domain/InventoryRepository')
const Model = require('../database/orm/sequilize/models/index')

module.exports = class extends InventoryRepository {
    constructor() {
        super();
        this.model = Model.Inventory
    }

    async persist(inventoryEntity) {
        const { 
            category_id, deposit_name, deposit_student_id, 
            deposit_admin, deposit_time, item_name, description,
            status, take_name, take_student_id, take_time, take_admin
        } = inventoryEntity;
        const seqInventory = await this.model.create({ 
            category_id, deposit_name, deposit_student_id, 
            deposit_admin, deposit_time, item_name, description,
            status, take_name, take_student_id, take_time, take_admin
        });
        await seqInventory.save();
    
        return new Inventory(
            seqInventory.id, seqInventory.category_id,
            seqInventory.deposit_name, seqInventory.deposit_student_id,
            seqInventory.deposit_admin, seqInventory.deposit_time,
            seqInventory.item_name, seqInventory.description,
            seqInventory.status, seqInventory.take_name,
            seqInventory.take_student_id, seqInventory.take_time,
            seqInventory.take_admin
        );
    }

    async merge(inventoryEntity) {
        const seqInventory = await this.model.findByPk(inventoryEntity.id);
    
        if (!seqInventory) return false;
    
        const { 
            category_id, deposit_name, deposit_student_id, 
            deposit_admin, deposit_time, item_name, description,
            status, take_name, take_student_id, take_time, take_admin
        } = inventoryEntity;

        await seqInventory.update({ 
            category_id, deposit_name, deposit_student_id, 
            deposit_admin, deposit_time, item_name, description,
            status, take_name, take_student_id, take_time, take_admin
        });

        return new Inventory(
            seqInventory.id, seqInventory.category_id,
            seqInventory.deposit_name, seqInventory.deposit_student_id,
            seqInventory.deposit_admin, seqInventory.deposit_time,
            seqInventory.item_name, seqInventory.description,
            seqInventory.status, seqInventory.take_name,
            seqInventory.take_student_id, seqInventory.take_time,
            seqInventory.take_admin
        );
    }

    async remove(InventoryId) {
        const seqInventory = await this.model.findByPk(InventoryId);
        if (seqInventory) {
            return seqInventory.destroy();
        }
        return false;
    }

    async get(inventoryId) {
        const seqInventory = await this.model.findByPk(inventoryId);
        if (!seqInventory) return false;

        return new Inventory(
            seqInventory.id, seqInventory.category_id,
            seqInventory.deposit_name, seqInventory.deposit_student_id,
            seqInventory.deposit_admin, seqInventory.deposit_time,
            seqInventory.item_name, seqInventory.description,
            seqInventory.status, seqInventory.take_name,
            seqInventory.take_student_id, seqInventory.take_time,
            seqInventory.take_admin
        );
    }

    async find() {
        const seqInventories = await this.model.findAll();
        return seqInventories.map((seqInventory) => {
            return new Inventory(
                seqInventory.id, seqInventory.category_id,
                seqInventory.deposit_name, seqInventory.deposit_student_id,
                seqInventory.deposit_admin, seqInventory.deposit_time,
                seqInventory.item_name, seqInventory.description,
                seqInventory.status, seqInventory.take_name,
                seqInventory.take_student_id, seqInventory.take_time,
                seqInventory.take_admin
            );
        });
    }
}