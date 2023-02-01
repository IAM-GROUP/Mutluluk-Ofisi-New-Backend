import express from 'express'
const app = express.Router()

//! CategoryMain routes
import { categoryMainRoutes } from './categoryMain/routes'

export const productsRoute = app.use('/api/products', categoryMainRoutes)