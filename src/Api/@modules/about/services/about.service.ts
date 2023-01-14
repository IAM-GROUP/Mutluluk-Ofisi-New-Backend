//! Dal
import { AboutDal } from '../dal/about.dal'
import { IAbout } from '../entity/IAbout'

export class AboutService implements AboutDal {
    constructor(private id?: string, private image?: string, private title?: string, private text?: string, private description?: string, private html?: [{ title: string, context: string }], private icon?: [{ src: string, context: string }]) {
        this.id = id
        this.image = image
        this.title = title
        this.description = description
        this.text = text
        this.html = html
        this.icon = icon
    }
    delete(id: string): Promise<{ message: string }> {
        throw new Error('Method not implemented.')
    }
    create(): Promise<IAbout> {
        throw new Error('Method not implemented.')
    }
    find(id: string): Promise<IAbout> {
        throw new Error('Method not implemented.')
    }
    findAll(): Promise<IAbout[]> {
        throw new Error('Method not implemented.')
    }
    update(id: string, image: string, title: string, text: string, description: string, html: [{ title: string; context: string }], icon: [{ src: string; context: string }]): Promise<{ message: string }> {
        throw new Error('Method not implemented.')
    }

}