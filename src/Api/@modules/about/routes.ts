import express from 'express'
const app = express()

//! About routes
import { getAbout } from './routes/about.routes'

const aboutMainRoutes = app.use('/api', getAbout) 