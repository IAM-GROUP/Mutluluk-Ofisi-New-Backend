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
import { swagger } from './core/config/swagger/swagger'

app.use('/', aboutMainRoutes)
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swagger))


server.listen(3000, () => {
    mongoConnection()
})