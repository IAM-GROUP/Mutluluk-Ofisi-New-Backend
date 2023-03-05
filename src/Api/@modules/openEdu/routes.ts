import express from 'express'
const app = express.Router()

//! OpenEdu routes

import { categoryRoutes } from './category/routes'

export const OpenEduRoute = app.use('/api/products', categoryRoutes)