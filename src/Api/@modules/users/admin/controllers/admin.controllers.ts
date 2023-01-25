import { Handler } from 'express'
//! Service
import { AdminService } from '../services/admin.service'

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
        if (password !== passwordRepeat) {
            res.json({
                error: "password not match"
            })
        }
        else {
            const admin = await adminService.adminCreate(email, password)
            if ((await admin.create).message) {
                res.json({
                    message: (await admin.create).message
                })
            }
            else {
                res.json({
                    message: (await admin.create)?.message
                })
            }

        }
    }
    static updateAdmin: Handler = async (req, res) => {
        const adminService = new AdminService()
        const { id, email, newPassword, hash } = req.body
        if (!newPassword) {
            res.json({
                message:"newPassword empty !!"
            })
        }
        else {
            const admin = adminService.admintUpdate(id, email, newPassword, hash)
            if ((await admin).message) {
                res.json({
                    message: (await admin).message
                })
            }
            else {
                res.json({
                    message: (await admin).update
                })
            }
        }
    }
    static deleteAdmin: Handler = async (req, res) => {
        const adminService = new AdminService()
        const { id } = req.body
        const admin = adminService.adminDelete(id)
        if (admin.message) {
            res.json({
                message: await admin.message
            })
        }
        else {
            res.json({
                message: await admin.delete
            })
        }

    }
}
