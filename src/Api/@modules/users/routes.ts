import express from 'express'
const app = express()

//! Admin routes
import { adminRoutes } from './admin/routes'

export const adminRoute = app.use('/users', adminRoutes)