import express from 'express'
import http from 'http'


const app = express()
const server = http.createServer(app)


//! Database
import { mongoConnection } from './core/data-source/mongo/connection'


server.listen(3000,()=>{
    mongoConnection()
})