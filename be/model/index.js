const User = require('./user.model')
const Produk = require('./produk.model')
const category = require('./category.model')
const Post = require('./posts.model')
const postCategory = require('./postCategory.model')

Post.User = Post.belongsTo(User, {foreignKey: 'user_id'})
Post.Produk = Post.belongsTo(Produk, {foreignKey: 'produk_id'})
Post.category = Post.belongsToMany(category, {
    through: postCategory,
    foreignKey: 'post_id',
    as: 'categories'
})
category.Post = category.belongsToMany(Post, {
    through: postCategory,
    foreignKey: 'category_id',
    as: 'posts'
})

User.Post = User.hasMany(Post, { foreignKey: 'user_id'})

module.exports = {User, Produk, category, Post}