
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const MONGO_URI = 'mongodb+srv://praveen:praveen1234@cluster0.cmrmq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

        const conn = await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });
        console.log(`Connected to the database! ${conn.connection.host}`);
    } catch (error) {
        console.error(`Cannot connect to the database! ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB
