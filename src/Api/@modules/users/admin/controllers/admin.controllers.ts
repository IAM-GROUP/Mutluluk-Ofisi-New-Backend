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
            res.json({
                message: (await admin.create)?.message
            })
        }
    }
    static updateAdmin: Handler = async (req, res) => {
        const adminService = new AdminService()
        const { id, email, password,hash } = req.body
        const admin = adminService.admintUpdate(id, email, password,hash)
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
