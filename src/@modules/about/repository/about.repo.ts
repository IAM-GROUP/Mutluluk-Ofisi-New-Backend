import { IAbout } from '../entity/IAbout'
export abstract class AboutRepository {
    abstract create():Promise<IAbout>

}