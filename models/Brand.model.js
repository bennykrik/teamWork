const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
    title: String
});

const Brand = mongoose.model("Brand", brandSchema);


module.exports = Brand;