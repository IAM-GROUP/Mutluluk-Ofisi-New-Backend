//! Dal
import { AboutDal } from '../dal/about.dal'
import { IAbout } from '../entity/IAbout'

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
    get aboutFindAll(): Promise<IAbout[]> {
        return this.aboutDataAcess.findAll()
    }

}