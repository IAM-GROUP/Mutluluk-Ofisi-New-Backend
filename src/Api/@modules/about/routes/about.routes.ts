import  express from 'express'
const app = express.Router()

//! Controller
import { about  } from '../controllers/controllers'


export const getAbout = app.get('/about-us',about.AboutController.getAbout)