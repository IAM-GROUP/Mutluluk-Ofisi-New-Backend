//? Repository
import { AdminRepository } from '../repository/admin.repo'

//? Entity
import { IAdmin } from '../entity/IAdmin'

//? Models
import { Admin } from '../models/admin.model'

export class AboutDal implements AdminRepository {
    async delete(id: string): Promise<{ message: string }> {
        await Admin.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(email: string, password: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {

                await Admin.create({ email, password })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IAdmin> {

        return new Promise(async (resolve, reject) => {
            try {
                const admin = await Admin.findById(id)
                resolve(admin as IAdmin)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IAdmin[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const admin = await Admin.find()
                resolve(admin as IAdmin[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, email: string, password: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const admin = await Admin.findByIdAndUpdate(id, { email, password })
                admin?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}