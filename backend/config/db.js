const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI
const connectDB = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log("MongoDB is connected");
   
};

module.exports = connectDB;
