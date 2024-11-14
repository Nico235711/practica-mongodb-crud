import express from 'express'
import petsRouter from './routes/pets.js'
import bodyParser from 'body-parser'

// creo mi instancia de express
const server = express()

// manejo formato JSON
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

// indico que todas las rutas van a pertenecer a petas
server.use("/pets", petsRouter)

export default server