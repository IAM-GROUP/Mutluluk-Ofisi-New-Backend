import express from 'express'
const app = express()

//! About routes
import { deleteCategoryMain, getCategoryMain, getCategoryMainId, postCategoryMain, putCategoryMain } from './routes/categoryMain.routes'

export const aboutMainRoutes = app.use('/api', getCategoryMain, getCategoryMainId, postCategoryMain, putCategoryMain, deleteCategoryMain)