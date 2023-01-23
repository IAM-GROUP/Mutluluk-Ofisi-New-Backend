import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { aboutMain } from '../controllers/controllers'

//? Get
export const getAbout = app.get('/about', aboutMain.AboutMainController.getAboutMain)
export const getAboutId = app.get('/about/id',aboutMain.AboutMainController.getAboutMainId)

//* Post
export const postAbout = app.post('/about', middleware.aboutMainMultiUploads, aboutMain.AboutMainController.createAboutMain)

//? Update
export const putAbout = app.put('/about',middleware.aboutMainMultiUploads,aboutMain.AboutMainController.updateAboutMain)

//! Delete
export const deleteAbout = app.delete('/about',aboutMain.AboutMainController.deleteAboutMain)