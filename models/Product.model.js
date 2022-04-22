const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    brand:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Brand"
    },
    title: String,
    category:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;