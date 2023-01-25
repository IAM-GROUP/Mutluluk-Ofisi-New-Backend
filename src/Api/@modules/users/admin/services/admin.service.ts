//! Dal
import { AdminDal } from '../dal/admin.dal'

//? Validation
import { validation } from '../../../../validations/validations'

//! Security

import { security } from '../../../../security/security'

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
                admin: this.adminDataAcess.find(id),
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
    admintUpdate(id: string, email: string, password: string, hash: string) {
        const isEmail = validation.isEmailValidation(email)
        const isValidId = validation.isIdValidation(id)
        const decrypt = security.bcrypt.dencrypt(password, hash)
        if (isValidId.isValid === true) {
            if (isEmail.isEmail === true) {
                if (decrypt.isDencrypt === true) {
                    return {
                        update: this.adminDataAcess.update(id, email, password)
                    }
                }
                else {
                    return {
                        message: decrypt.message
                    }
                }
            }
            else {
                return {
                    message: isEmail.message
                }
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async adminCreate(email: string, password: string) {
        const isEmail = validation.isEmailValidation(email)
        const hash = security.bcrypt.encrypt(password)
        if (isEmail.isEmail === true) {
            return {
                create: this.adminDataAcess.create(email, hash)
            }
        }
        else {
            return {
                create: this.adminDataAcess.create(email, hash)
            }
        }

    }
}