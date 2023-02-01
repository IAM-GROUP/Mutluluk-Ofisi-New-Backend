import express from 'express'
const app = express.Router()

//! CategoryMain routes
import { categoryMainRoutes } from './categoryMain/routes'

export const ProductsRoute = app.use('/api/products', categoryMainRoutes)