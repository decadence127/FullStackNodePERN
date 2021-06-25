const express = require('express')
require('dotenv').config()
const sequelize = require('./database')
const PORT = process.env.PORT || 5050

const app = express()


const start = async () =>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        
        app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
    }
    catch(e){
        console.log(e)
    }
}
start()