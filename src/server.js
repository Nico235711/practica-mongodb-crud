import express from 'express'
import mascotsRouter from './routes/mascots.js'

// creo mi instancia de express
const server = express()

// indico que todas las rutas van a pertenecer a mascotas
server.use("/mascots", mascotsRouter)

export default server