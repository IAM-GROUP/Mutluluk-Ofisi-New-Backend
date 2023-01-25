import express from 'express'
const app = express.Router()

//! Admin routes
import { adminRoutes } from './admin/routes'

export const adminRoute = app.use('/api/users', adminRoutes)