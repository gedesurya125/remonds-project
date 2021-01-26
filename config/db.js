const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongooURI');

//koneksi db
const connectDB = async() => {
  try{
    await mongoose.connect(db, {useNewUrlParser:true});
    
    console.log('MongooDB Conected...');
  }catch(err){
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
}

//module export
module.exports = connectDB;
