import _eval from 'eval'
//! Dal
import { AboutDal } from '../dal/about.dal'

//? Validation
import { validation } from '../../../validations/validations'

//* Security
import { security } from '../../../security/security'
export class AboutService {
    private aboutDataAcess: AboutDal = new AboutDal()
    constructor(private id?: string, private image?: string, private title?: string, private text?: string, private description?: string, private html?: [{ title: string, context: string }], private icon?: [{ src: string, context: string }]) {
        this.id = id
        this.image = image
        this.title = title
        this.description = description
        this.text = text
        this.html = html
        this.icon = icon
    }
    aboutFindAll() {
        return this.aboutDataAcess.findAll()
    }
    aboutFind(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                about: this.aboutDataAcess.find(id),
                message: isValidId.message
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    aboutDelete(id: string) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
           
                delete: this.aboutDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    aboutUpdate(id: string, image: string, title: string, text: string, description: string, html: [{ title: string; context: string; }], icon: [{ src: string; context: string; }]) {
        const result: any = _eval(`const obj=${html};exports.obj=obj`)
        const _html = result.obj
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            const decryptHtml = security.decrypt(_html)
            const decryptIcon = security.decrypt(icon)
            if (decryptHtml || decryptIcon) {
                
                return {
                   
                    update: this.aboutDataAcess.update(id, image, title, text, description, decryptHtml, decryptIcon)
                }
            }
            else {
                return {
                    message: "html or icon prop empty"
                }
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    async aboutCreate(image: string, title: string, text: string, description: string, html: { iv: string; encryptedData: string; }, icon: { iv: string; encryptedData: string; }) {
        const result: any = _eval(`const obj=${html};exports.obj=obj`)
        const _html = result.obj
        const decryptHtml = security.decrypt(_html)
        const decryptIcon = security.decrypt(icon)
        if (decryptHtml || decryptIcon) {
            return {
                create: this.aboutDataAcess.create(image, title, text, description, decryptHtml, decryptIcon),
            }
        }
        else {
            return {
                message: "html or icon prop empty"
            }
        }

    }
}