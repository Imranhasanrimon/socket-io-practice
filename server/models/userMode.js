const mongoose = require("mongoose");
const userModel = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        pic: { type: String, required: true, default: "https://i.ibb.co.com/jvrgWCj3/generated-by-AI.webp" },

    }
)

const User = mongoose.model("User", userModel);

module.exports = User;