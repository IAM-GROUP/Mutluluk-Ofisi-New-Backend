//! Dal
import { AboutDal } from '../dal/about.dal'

//? Validation
import { validation } from '../validations/validations'

//* Security
import { security } from '../security/security'
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
                message: isValidId.message,
                about: this.aboutDataAcess.delete(id)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    aboutUpdate(id: string, image: string, title: string, text: string, description: string, html: [{ title: string; context: string; }], icon: [{ src: string; context: string; }]) {
        const isValidId = validation.isIdValidation(id)
        if (isValidId.isValid === true) {
            return {
                message: isValidId.message,
                update: this.aboutDataAcess.update(id, image, title, text, description, html, icon)
            }
        }
        else {
            return {
                message: isValidId.message
            }
        }
    }
    aboutCreate(image: string, title: string, text: string, description: string, html: { iv: string; encryptedData: string; }, icon: { iv: string; encryptedData: string; }) {
        const decryptHtml = security.decrypt(html)
        const decryptIcon = security.decrypt(icon)
        //validation.isImageExists(image)
            console.log(JSON.parse(decryptHtml))
        if (decryptHtml || decryptIcon) {
            return {
                create: this.aboutDataAcess.create(image, title, text, description, JSON.parse(decryptHtml), decryptIcon),
            }
        }
        else {
            return {
                message: "html or icon prop empty"
            }
        }

    }
}