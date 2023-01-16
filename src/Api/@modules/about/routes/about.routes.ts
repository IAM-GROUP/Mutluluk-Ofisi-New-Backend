import express from 'express'
const app = express.Router()

//! Middleware
import { middleware } from '../middlewares/middlewares'

//! Controller
import { about } from '../controllers/controllers'

//? Get
export const getAbout = app.get('/about-us', about.AboutController.getAbout)

//* Post
export const postAbout = app.post('/about-us', middleware.multiuploads, about.AboutController.createAbout)