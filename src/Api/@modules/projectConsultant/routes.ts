import express from 'express'
const app = express.Router()

//! Category routes
import { categoryRoutes } from './category/routes'

export const projectConsultantRoute = app.use('/api/project-consultant',categoryRoutes)