import express from 'express'
import http from 'http'
import swaggerUI from 'swagger-ui-express'

const app = express()
const server = http.createServer(app)


//! Database
import { mongoConnection } from './core/data-source/mongo/connection'

//! Routes
import { aboutMainRoutes } from './Api/@modules/about/routes'

//! Swagger
import swaggerJson from './swagger.json'

app.use('/', aboutMainRoutes)
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerJson))


server.listen(3000, () => {
    mongoConnection()
})