const mongoose = require("mongoose")
let dbUrl  = process.env.db_url
const dbPassword = process.env.db_password


dbUrl = dbUrl.replace("<db_password>", dbPassword)
const connectDb = async()=>{
    const connect = await mongoose.connect(dbUrl)
    if(connect){
        console.log("connected to database successfully")
    }
}













module.exports = connectDb