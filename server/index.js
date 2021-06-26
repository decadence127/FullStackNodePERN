const express = require('express')
require('dotenv').config()

const entities = require('./entities/entities')
const sequelize = require('./database')
const PORT = process.env.PORT || 5050
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'OK'})
})


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