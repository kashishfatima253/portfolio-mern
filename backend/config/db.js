const mongoose = require('mongoose')
const MONGO_URI = "mongodb+srv://test_user:wpCP3OTsToIWD6ii@cluster0.kjrkiv7.mongodb.net/?retryWrites=true&w=majority"
const connectDB = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log("MongoDB is connected");
   
};

module.exports = connectDB;
