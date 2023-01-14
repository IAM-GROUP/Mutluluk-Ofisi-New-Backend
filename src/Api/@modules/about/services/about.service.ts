//! Dal
import { AboutDal } from '../dal/about.dal'

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
        if (typeof id === 'string') {
            if (id !== "") {
                return this.aboutDataAcess.find(id)
            }
            else {
                return {
                    message: "id empty"
                }
            }
        }
        else {
            return {
                message: "id not string"
            }
        }
    }

}