import { IAbout } from '../entity/IAbout'
export interface AboutRepository {
    create(): Promise<IAbout>
    find(title: string): Promise<IAbout>
    findAll(): Promise<IAbout>
    update(image: string, title?: string, text?: string, description?: string): Promise<IAbout>
    delete(id: string): Promise<{message:string}>
}