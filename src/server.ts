import express from 'express'
import http from 'http'
import swaggerUI from 'swagger-ui-express'
import bodyParser from 'body-parser'

const app = express()
export const server = http.createServer(app)


//! Database
import { mongoConnection } from './core/data-source/mongo/connection'

//! Routes
import { aboutRoutes } from './Api/@modules/about/routes'
import { aboutMainRoutes } from './Api/@modules/aboutMain/routes'




app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

//! Swagger
import swaggerJson from './swagger.json'

app.use('/', aboutRoutes, aboutMainRoutes)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJson))

mongoConnection()
if (process.env.NODE_ENV !== 'test') {
    server.listen(3000, () => {


    })
}
