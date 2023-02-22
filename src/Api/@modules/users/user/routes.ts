import express from 'express'
const app = express.Router()

//! User routes

import { deleteUser, getUser, getUserId, postUser, putUser, signUser } from './routes/user.routes'

export const userRoutes = app.use('/user', getUser, getUserId, postUser, putUser, signUser, deleteUser)