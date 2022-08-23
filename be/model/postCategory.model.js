const { sequelize, DataTypes } = require('../config/db')


module.exports = sequelize.define('postCategory', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "post",
            key: 'id',
        }
    },
    category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "category",
            key: "id",
        }
    }
},
{
    tableName: 'posts_category',
    timestamps: false
})