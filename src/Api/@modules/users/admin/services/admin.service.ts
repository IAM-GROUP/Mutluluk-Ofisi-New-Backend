//! Dal
import { AdminDal } from '../dal/admin.dal'

//? Validation
import { validation } from '../../../../validations/validations'

export class AdminService {
    private adminDataAcess: AdminDal = new AdminDal()
    constructor(private id?: string, private email?: string, private password?: string) {
        this.id = id
        this.email = email
        this.password = password
    }
    adminFindAll() {
        return this.adminDataAcess.findAll()
    }
    adminFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                about: this.adminDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    adminDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.adminDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    admintUpdate(id: string, email: string, password: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            update: this.adminDataAcess.update(id, email, password)
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async adminCreate(email: string, password: string) {
        return {
            create: this.adminDataAcess.create(email, password),
        }
    }
}