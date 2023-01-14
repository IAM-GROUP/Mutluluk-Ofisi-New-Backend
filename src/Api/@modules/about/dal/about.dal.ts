//? Repository
import { AboutRepository } from '../repository/about.repo'

//? Entity
import { IAbout } from '../entity/IAbout'

//? Models
import { About } from '../models/about.models'
export class AboutDal implements AboutRepository {
    delete(id: string): Promise<IAbout> {
        
        return new Promise((resolve,reject)=>{})
    }
    create():Promise<IAbout> {
        return new Promise((resolve,reject)=>{})
    }
    find():Promise<IAbout> {
        return new Promise((resolve,reject)=>{})
    }
    findAll():Promise<IAbout> {
        return new Promise((resolve,reject)=>{})
    }
    update():Promise<IAbout> {
        return new Promise((resolve,reject)=>{})
    }
}