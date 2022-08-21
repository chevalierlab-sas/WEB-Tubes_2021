const Category = require('./Category')
const User = require('./User')
const Student = require('./Student')
const Inventory = require('./Inventory')

// relation
// inventory relation
Inventory.Category = Inventory.belongsTo(Category, {foreignKey: 'category_id'})
Inventory.DepositStudent = Inventory.belongsTo(Student, {foreignKey: 'deposit_student_id'})
Inventory.DepositAdmin = Inventory.belongsTo(User, {foreignKey: 'deposit_admin'})
Inventory.TakeStudent = Inventory.belongsTo(Student, {foreignKey: 'take_student_id'})
Inventory.TakeAdmin = Inventory.belongsTo(User, {foreignKey: 'take_admin'})

// category relation
Category.Inventory = Category.hasMany(Inventory, {foreignKey: "category_id"})

// student relation
Student.DepositStudentInventories = Student.hasMany(Inventory, {foreignKey: 'deposit_student_id'})
Student.TakeStudentInventories = Student.hasMany(Inventory, {foreignKey: 'take_student_id'})

// admin user relation
User.DepositAdminInventories = User.hasMany(Inventory, {foreignKey: 'deposit_admin'})
User.TakeAdminInventories = User.hasMany(Inventory, {foreignKey: 'take_admin'})


module.exports = { Category, User, Student, Inventory }