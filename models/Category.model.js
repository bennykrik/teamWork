const mongoose = require("mongoose");

const caterogySchema = mongoose.SchemaTypes({
    title: String
});

const Category = mongoose.model("Category", caterogySchema);

module.exports = Category;