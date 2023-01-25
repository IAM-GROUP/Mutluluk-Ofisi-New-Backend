import { Handler } from 'express'
//! Service
import { AdminService } from '../services/admin.service'

//! Validation
import { validation } from '../../../../validations/validations'
import { security } from '../../../../security/security'

export class AdminController {
    static getAdmin: Handler = async (req, res) => {
        const admin = await new AdminService().adminFindAll()
        res.json({ admin })
    }
    static getAdminId: Handler = async (req, res) => {
        const { id } = req.body
        const admin = new AdminService().adminFind(id)
        res.json({ admin: await admin.admin })
    }
    static createAdmin: Handler = async (req, res) => {

        const adminService = new AdminService()

        const { email, password, passwordRepeat } = req.body
        const isEmail = validation.isEmailValidation(email)
        if (isEmail.isEmail === false) {
            res.json({
                message: isEmail.message
            })
        }
        else {
            if (password !== passwordRepeat) {
                res.json({
                    error: "password not match"
                })
            }
            else {
                const passHash = security.bcrypt.encrypt(password)
                const admin = await adminService.adminCreate(email, passHash)
                res.json({
                    message: (await admin.create)?.message
                })
            }
        }
    }
    static updateAdmin: Handler = async (req, res) => {
        const adminService = new AdminService()
        const { id, email, password } = req.body
        const admin = adminService.admintUpdate(id, email, password)
        res.json({
            message: (await admin.update)?.message
        })
    }
    static deleteAdmin: Handler = async (req, res) => {
        const adminService = new AdminService()
        const { id } = req.body
        const admin = adminService.adminDelete(id)
        res.json({
            message: (await admin.delete)?.message
        })
    }
}
