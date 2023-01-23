import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../../../middlewares/middlewares'

//! Controller
import { aboutMain } from '../controllers/controllers'

//? Get
export const getAbout = app.get('/about-us', aboutMain.AboutMainController.getAboutMain)
export const getAboutId = app.get('/about-us/id',aboutMain.AboutMainController.getAboutMainId)

//* Post
export const postAbout = app.post('/about-us', middleware.aboutMultiUploads, aboutMain.AboutMainController.createAboutMain)

//? Update
export const putAbout = app.put('/about-us',middleware.aboutMultiUploads,aboutMain.AboutMainController.updateAboutMain)

//! Delete
export const deleteAbout = app.delete('/about-us',aboutMain.AboutMainController.deleteAboutMain)