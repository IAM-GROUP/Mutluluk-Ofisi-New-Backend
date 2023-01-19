import express from 'express'
const app = express()

//! About routes
import { getAbout,postAbout,putAbout,deleteAbout } from './routes/about.routes'

export const  aboutMainRoutes = app.use('/api', getAbout,postAbout,putAbout,deleteAbout)