//! Dal
import { AboutDal } from '../dal/about.dal'

export class AboutService {
    constructor(private id?: string, private image?: string, private title?: string, private text?: string, private description?: string, private html?: [{ title: string, context: string }], private icon?: [{ src: string, context: string }]) {
        this.id = id
        this.image = image
        this.title = title
        this.description = description
        this.text = text
        this.html = html
        this.icon = icon
    }

}