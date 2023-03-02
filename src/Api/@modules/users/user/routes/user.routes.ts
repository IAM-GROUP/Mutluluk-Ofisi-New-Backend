import express from 'express'
import passport from 'passport'
const app = express.Router()

//! Middleware
import { middleware } from '../../../../middlewares/middlewares'

//! Controller
import { user } from '../controllers/controllers'



//? Get
export const getUser = app.get('/', user.UserController.getUser)
export const getUserId = app.get('/id', user.UserController.getUserId)
export const getUserGoogleAuth = app.get('/googleAuth', passport.authenticate('google', { scope: ['profile', 'email'] }), (req, res) => res.redirect('/api/users/user/googleSign'))
export const getGoogleUserSign = app.get('/googleSign', user.UserController.signGoogleUser)
export const getFollowUser = app.get('/getFollow', user.UserController.getFollowUser)
export const getFollowersUser = app.get('/getFollowers', user.UserController.getFollowersUser)

//* Post
export const postUser = app.post('/create', middleware.multer.userUploads, user.UserController.createUser)
export const signUser = app.post('/sign', user.UserController.signUser)
export const logoutUser = app.post('/logout', user.UserController.logoutUser)
export const followUser = app.post('/follow', middleware.auth.userAuth, user.UserController.followUser)
export const unFollowUser = app.post('/unFollow', middleware.auth.userAuth, user.UserController.unFollowUser)
export const postBasket = app.post('/basket', middleware.auth.userAuth, user.UserController.postBasket)


//? Update
export const putUser = app.put('/update', middleware.auth.userAuth, middleware.multer.userUploads, user.UserController.updateUser)

//! Delete
export const deleteUser = app.delete('/delete', middleware.auth.adminAuth, user.UserController.deleteUser)