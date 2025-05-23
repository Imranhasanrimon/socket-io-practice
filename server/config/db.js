const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOURI)
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;