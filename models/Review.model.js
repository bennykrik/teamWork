const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    product: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Product"
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    text: String
})

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;