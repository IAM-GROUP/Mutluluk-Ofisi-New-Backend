//! Dal
import { UserDal } from '../dal/user.dal'

//? Validation
import { validation } from '../../../../validations/validations'

//* Security
import { security } from '../../../../security/security'

export class UserService {
    private userDataAcess: UserDal = new UserDal()
    userFindAll() {
        return this.userDataAcess.findAll()
    }
    userFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                user: this.userDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    userDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {

                delete: this.userDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    userUpdate(id: string, name: string, surname: string, email: string, image: string, phone: string, hash: string, oldPassword: string, newPassword: string, dateOfBirth: string, gender: string, basket: string, order: string, creditCardName: string, creditCardSurname: string, creditCardNumber: string, creditCardCvv: string) {
        const isValidId = validation.isIdValidation(id)
        const isEmail = validation.isEmailValidation(email)
        const decrypt = security.bcrypt.dencrypt(oldPassword, hash)
        if (isValidId.isValid) {
            if (isEmail.isEmail) {
                if (decrypt.isDencrypt) {
                    const encrypt = security.bcrypt.encrypt(newPassword)
                    return {
                        update: this.userDataAcess.update(id, name, surname, email, image, phone, encrypt, dateOfBirth, gender, basket, order, creditCardName, creditCardSurname, creditCardNumber, creditCardCvv)
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
    async userCreate(name: string, surname: string, email: string, image: string, phone: string, password: string, dateOfBirth: string, gender: string, basket: string, order: string, creditCardName: string, creditCardSurname: string, creditCardNumber: string, creditCardCvv: string) {
        const hash = security.bcrypt.encrypt(password)
        const isEmail = validation.isEmailValidation(email)
        if (isEmail.isEmail) {
            return {
                create: this.userDataAcess.create(name, surname, email, image, phone, hash, dateOfBirth, gender, basket, order, creditCardName, creditCardSurname, creditCardNumber, creditCardCvv),
            }
        }
        else {
            return {
                message: "email not valid"
            }
        }
    }
    async userFollow(follow: string, followers: string) {
        if (follow || followers) {
            return {
                follow: this.userDataAcess.follow(follow, followers),
            }
        }
        else {
            return {
                message: "follow || followers prop empty"
            }
        }
    }
    async userUnFollow(follow: string, followers: string) {
        if (follow || followers) {
            return {
                follow: this.userDataAcess.unFollow(follow, followers),
            }
        }
        else {
            return {
                message: "follow || followers prop empty"
            }
        }
    }
    async userGetFollow(id: string) {
        if (id) {
            return {
                follow: this.userDataAcess.getFollow(id),
            }
        }
        else {
            return {
                message: "id prop empty"
            }
        }
    }
    async userGetFollowers(id: string) {
        if (id) {
            return {
                followers: this.userDataAcess.getFollowers(id),
            }
        }
        else {
            return {
                message: "id prop empty"
            }
        }
    }
    async userAddBasket(id: string, basket: any) {
        const userBasket = security.crypto.cryen(basket)
        if (userBasket) {
            return {
                basket: this.userDataAcess.addBasket(id, userBasket.toString()),
            }
        }
        else {
            return {
                message: "id basket prop empty"
            }
        }
    }
    async userAddOrder(id: string, order: any) {
        const userOrder = security.crypto.cryen(order)
        if (userOrder) {
            return {
                order: this.userDataAcess.addOrder(id, userOrder.toString()),
            }
        }
        else {
            return {
                message: "id order prop empty"
            }
        }
    }
    async userAddRoles(name: string) {
        if (name) {
            return {
                roles: this.userDataAcess.addRoles(name),
            }
        }
        else {
            return {
                message: "name prop empty"
            }
        }
    }
    async userDeleteRoles(name: string) {
        if (name) {
            return {
                userRoles: this.userDataAcess.deleteRoles(name),
            }
        }
        else {
            return {
                message: "name prop empty"
            }
        }
    }
    async userRelAddRoles(userId: string, roleId: string) {
        if (userId || roleId) {
            return {
                userRoles: this.userDataAcess.addUserRole(userId, roleId),
            }
        }
        else {
            return {
                message: "userId roleId prop empty"
            }
        }
    }
    async userRelDeleteRoles(userId: string, roleId: string) {
        if (userId || roleId) {
            return {
                userRoles: this.userDataAcess.deleteUserRole(userId, roleId),
            }
        }
        else {
            return {
                message: "userId roleId prop empty"
            }
        }
    }
    async userGetUserRole(id: string) {
        if (id) {
            return {
                userRoles: this.userDataAcess.getUserRole(id),
            }
        }
        else {
            return {
                message: "id roleId prop empty"
            }
        }
    }
    async userGetRoleUser(id: string) {
        if (id) {
            return {
                userRoles: this.userDataAcess.getRoleUser(id),
            }
        }
        else {
            return {
                message: "id roleId prop empty"
            }
        }
    }
    async userSign(email: string, password: string) {
        const isEmail = validation.isEmailValidation(email)
        if (isEmail.isEmail) {
            const isUser:any = await this.userDataAcess.getUserEmail(email)
            return {
                sign:isUser[0][0]
            }
            /* const isHashTrue = security.bcrypt.dencrypt(password, isUser.password) */
        }
    }
}