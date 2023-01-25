import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../../middlewares/middlewares'

//! Controller
import { admin } from '../controllers/controllers'

//? Get
export const getAdmin = app.get('/admin', admin.AdminController.getAdmin)
export const getAdminId = app.get('/admin/id', admin.AdminController.getAdminId)

//* Post
export const postAdmin = app.post('/', admin.AdminController.createAdmin)

//? Update
export const putAdmin = app.put('/', admin.AdminController.updateAdmin)

//! Delete
export const deleteAdmin = app.delete('/', admin.AdminController.deleteAdmin)