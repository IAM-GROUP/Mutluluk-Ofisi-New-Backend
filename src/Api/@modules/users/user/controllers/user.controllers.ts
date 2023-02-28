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
        res.json({ user: await user.user })
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
    static logoutUser: Handler = async ({ headers }, res) => {
        const userService = new UserService()
        const token = headers['x-access-token']
        if (token) {
            const admin = await userService.userLogout(token as string)
            res.status(200).json({
                message: admin.message
            })
        }
        else {
            res.status(401).json({
                message: "not found token"
            })
        }
    }
}
