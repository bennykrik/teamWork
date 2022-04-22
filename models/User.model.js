const mongoose = require("mongoose");

const userSchema = ({
    name: String,
    basket: []
});

const User = mongoose.model("User", userSchema);

module.exports = User;