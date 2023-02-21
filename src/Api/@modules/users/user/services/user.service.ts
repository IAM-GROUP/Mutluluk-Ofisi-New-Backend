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
    userUpdate(id: string, name: string, surname: string, email: string, image: string, phone: string, password: string, dateOfBirth: string, gender: string, basket: string, order: string, creditCardName: string, creditCardSurname: string, creditCardNumber: string, creditCardCvv: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            if (id) {
                return {
                    update: this.userDataAcess.update(id, name, surname, email, image, phone, password, dateOfBirth, gender, basket, order, creditCardName, creditCardSurname, creditCardNumber, creditCardCvv)
                }
            }
            else {
                return {
                    message: "id prop empty"
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
        if (name) {
            return {
                create: this.userDataAcess.create(name, surname, email, image, phone, password, dateOfBirth, gender, basket, order, creditCardName, creditCardSurname, creditCardNumber, creditCardCvv),
            }
        }
        else {
            return {
                message: "name prop empty"
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
    async addBasket(id: string, basket: string) {
        if (id || basket) {
            return {
                followers: this.userDataAcess.addBasket(id, basket),
            }
        }
        else {
            return {
                message: "id basket prop empty"
            }
        }
    }
    async addOrder(id: string, order: string) {
        if (id || order) {
            return {
                followers: this.userDataAcess.addOrder(id, order),
            }
        }
        else {
            return {
                message: "id order prop empty"
            }
        }
    }
    async addRoles(name: string) {
        if (name) {
            return {
                followers: this.userDataAcess.addRoles(name),
            }
        }
        else {
            return {
                message: "name prop empty"
            }
        }
    }
}