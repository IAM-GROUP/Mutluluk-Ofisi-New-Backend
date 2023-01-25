import express from 'express'
const app = express.Router()

//! Admin routes
import { getAdmin, deleteAdmin, getAdminId, postAdmin, putAdmin } from './routes/admin.routes'

export const adminRoutes = app.use('/admin', getAdmin, deleteAdmin, getAdminId, postAdmin, putAdmin)