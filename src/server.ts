import express from 'express'
import http from 'http'
import swaggerUI from 'swagger-ui-express'
import bodyParser from 'body-parser'

const app = express()
const server = http.createServer(app)


//! Database
import { mongoConnection } from './core/data-source/mongo/connection'

//! Routes
import { aboutMainRoutes } from './Api/@modules/about/routes'




app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

//! Swagger
import swaggerJson from './swagger.json'

app.use('/', aboutMainRoutes)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJson))


server.listen(3000, () => {
    mongoConnection()
})