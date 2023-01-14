//! Dal
import { AboutDal } from '../dal/about.dal'


//? Validation
import { validation } from '../validations/validations'
export class AboutService {
    private aboutDataAcess: AboutDal
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

    }

}