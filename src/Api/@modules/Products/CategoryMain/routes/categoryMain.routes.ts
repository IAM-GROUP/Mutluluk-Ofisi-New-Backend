import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../../middlewares/middlewares'

//! Controller
import { categoryMain } from '../controllers/controllers'

//? Get
export const getCategoryMain = app.get('/categoryMain', categoryMain.CategoryMainController.getCategoryMain)
export const getCategoryMainId = app.get('/categoryMain/id', categoryMain.CategoryMainController.getCategoryMainId)

//* Post
export const postCategoryMain = app.post('/categoryMain', middleware.auth.adminAuth, categoryMain.CategoryMainController.createCategoryMain)

//? Update
export const putCategoryMain = app.put('/categoryMain', middleware.auth.adminAuth, categoryMain.CategoryMainController.updateCategoryMain)

//! Delete
export const deleteCategoryMain = app.delete('/categoryMain', middleware.auth.adminAuth, categoryMain.CategoryMainController.deleteCategoryMain)