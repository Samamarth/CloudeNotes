const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://samarthchaniyara:45825243s136@cluster0.hfjpimy.mongodb.net/test"

const connectToMongo =  () =>{
mongoose.connect(mongoURI)
console.log('Connect to mongo')
}


module.exports = connectToMongo  

// mongodb+srv://samarthchaniyara:45825243s136@cluster0.hfjpimy.mongodb.net/test