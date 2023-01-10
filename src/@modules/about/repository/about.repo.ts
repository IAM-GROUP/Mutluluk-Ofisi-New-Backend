import { IAbout } from '../entity/IAbout'
export abstract class AboutRepository {
    abstract create():Promise<IAbout>
    abstract find(name:string):Promise<IAbout>
    abstract findAll():Promise<IAbout>
    abstract update(image?:string,title?:string,text?:string,description?:string):Promise<IAbout>

}