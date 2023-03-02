import { Handler } from 'express'
//! Service
import { UserService } from '../services/user.service'

export class UserController {
    static getUser: Handler = async (req, res) => {
        const user = await new UserService().userFindAll()
        res.json({ user })
    }
    static getUserId: Handler = async (req, res) => {
        const { id } = req.body
        const user = new UserService().userFind(id)
        res.json({ user: await user })
    }
    static createUser: Handler = async (req, res) => {
        const userService = new UserService()
        const { name, surname, email, phone, password, passwordRepeat, dateOfBirth, gender, basket, order, creditCardName, creditCardSurname, creditCardNumber, creditCardCvv } = req.body
        const { image } = req.files as any
        if (password !== passwordRepeat) {
            res.json({
                error: "password not match"
            })
        }
        else {
            const user = await userService.userCreate(name, surname, email, image[0].path, phone, password, dateOfBirth, gender, basket, order, creditCardName, creditCardSurname, creditCardNumber, creditCardCvv)
            if (user.message) {
                res.json({
                    message: user.message
                })
            }
            else {
                res.json({
                    message: (await user.create)?.message
                })
            }

        }
    }
    static updateUser: Handler = async (req, res) => {
        const userService = new UserService()
        const { id, name, surname, email, phone, hash, oldPassword, newPassword, passwordRepeat, dateOfBirth, gender, basket, order, creditCardName, creditCardSurname, creditCardNumber, creditCardCvv } = req.body
        const { image } = req.files as any
        if (!newPassword) {
            res.json({
                message: "newPassword empty !!"
            })
        }
        else {
            const user = userService.userUpdate(id, name, surname, email, image[0].path, phone, hash, oldPassword, newPassword, dateOfBirth, gender, basket, order, creditCardName, creditCardSurname, creditCardNumber, creditCardCvv)
            if (user.message) {
                res.json({
                    message: user.message
                })
            }
            else {
                res.json({
                    message: await user.update
                })
            }
        }
    }
    static deleteUser: Handler = async (req, res) => {
        const userService = new UserService()
        const { id } = req.body
        const user = userService.userDelete(id)
        if (user.message) {
            res.json({
                message: user.message
            })
        }
        else {
            res.json({
                message: user.delete
            })
        }

    }
    static signUser: Handler = async (req, res) => {
        const userService = new UserService()
        const { email, password } = req.body
        const user = await userService.userSign(email, password)
        if (user.token) {
            res.json(user.token)
        }
        else {
            res.json(user.sign)
        }
    }
    static signGoogleUser: Handler = async (req, res) => {
        const user: any = req.user
        const userService = new UserService()
        const users = await userService.userCreate(user.name.givenName, user.name.familyName, user.emails[0].value, user.photos[0].value, "empty", user.name.givenName + user.name.familyName, "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty")
        if (users.create) {
            const userSign = await userService.userSign(user.emails[0].value, user.name.givenName + user.name.familyName)
            if (userSign.token) {
                res.json(userSign.token)
            }
            else {
                res.json(userSign.sign)
            }
        }
        else {
            res.json(users.create)
        }
    }
    static logoutUser: Handler = async ({ headers }, res) => {
        const userService = new UserService()
        const token = headers['x-access-token']
        if (token) {
            const user = await userService.userLogout(token as string)
            res.status(200).json({
                message: user.message
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static followUser: Handler = async (req, res) => {
        const userService = new UserService()
        const { follow, followers } = req.body
        if (follow && followers) {
            const user = await userService.userFollow(follow, followers)
            res.status(200).json({
                message: await user.follow
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static unFollowUser: Handler = async (req, res) => {
        const userService = new UserService()
        const { follow, followers } = req.body
        if (follow && followers) {
            const user = await userService.userUnFollow(follow, followers)
            res.status(200).json({
                message: await user.follow
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static getFollowUser: Handler = async (req, res) => {
        const userService = new UserService()
        const { follow } = req.body
        if (follow) {
            const user = await userService.userGetFollow(follow)
            res.status(200).json({
                user: user.follow
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static getFollowersUser: Handler = async (req, res) => {
        const userService = new UserService()
        const { followers } = req.body
        if (followers) {
            const user = await userService.userGetFollowers(followers)
            res.status(200).json({
                user: user.followers
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static postBasket: Handler = async (req, res) => {
        const userService = new UserService()
        const { id, basket } = req.body
        if (id && basket) {
            const user = await userService.userAddBasket(id, basket)
            res.status(200).json({
                user: user.basket
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static getBasket: Handler = async (req, res) => {
        const userService = new UserService()
        const { id } = req.body
        if (id) {
            const user = await userService.userGetBasket(id)
            res.status(200).json({
                user: user.basket
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static postOrder: Handler = async (req, res) => {
        const userService = new UserService()
        const { id, order } = req.body
        if (id && order) {
            const user = await userService.userAddOrder(id, order)
            res.status(200).json({
                user: user.order
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static getOrder: Handler = async (req, res) => {
        const userService = new UserService()
        const { id } = req.body
        if (id) {
            const user = await userService.userGetOrder(id)
            res.status(200).json({
                user: user.order
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
    static getRoles: Handler = async (req, res) => {
        const user = await new UserService().userGetRoles()
        res.json({ user })
    }
    static getRole: Handler = async (req, res) => {
        const userService = new UserService()
        const { id } = req.body
        if (id) {
            const user = await userService.userGetRole(id)
            res.status(200).json({
                user: user.role
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
}
