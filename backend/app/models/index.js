const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//mongoose.set('useFindAndModify', false);
const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.brand = require("./brand.model");
db.product = require("./product.model");
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;