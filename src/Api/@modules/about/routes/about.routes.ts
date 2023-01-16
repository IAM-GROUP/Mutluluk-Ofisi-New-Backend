import  express from 'express'
const app = express.Router()

//! Controller
import { about  } from '../controllers/controllers'

//? Get
export const getAbout = app.get('/about-us',about.AboutController.getAbout)

//* Post
export const postAbout = app.post('/about-us',about.AboutController.createAbout)