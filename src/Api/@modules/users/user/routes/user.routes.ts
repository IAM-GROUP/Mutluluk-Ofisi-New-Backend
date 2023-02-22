import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../../middlewares/middlewares'

//! Controller
import { user } from '../controllers/controllers'

//? Get
export const getUser = app.get('/', user.UserController.getUser)
export const getUserId = app.get('/id', user.UserController.getUserId)

//* Post
export const postUser = app.post('/create', middleware.multer.userUploads, user.UserController.createUser)
export const signUser = app.post('/sign', user.UserController.signUser)
/* export const logoutUser = app.post('/logout', admin.AdminController.logoutAdmin) */

//? Update
export const putUser = app.put('/update', middleware.multer.userUploads, user.UserController.updateUser)

//! Delete
export const deleteUser = app.delete('/delete', user.UserController.deleteUser)