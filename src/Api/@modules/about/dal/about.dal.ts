//? Repository
import { AboutRepository } from '../repository/about.repo'

//? Entity
import { IAbout } from '../entity/IAbout'

//? Models
import { About } from '../models/about.models'

export class AboutDal implements AboutRepository {
    async delete(id: string): Promise<{ message: string }> {
        await About.findByIdAndDelete(id)
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    create(): Promise<IAbout> {
        return new Promise((resolve, reject) => { })
    }
    async find(id: string): Promise<IAbout> {
        const about = await About.findById(id)
        return new Promise((resolve, reject) => {
            try {
                resolve(about as IAbout)
            }
            catch (err) {
                reject(err)
            }
        })
    }
    async findAll(): Promise<IAbout[]> {
        const about = await About.find()
        return new Promise((resolve, reject) => {
            try {
                resolve(about as IAbout[])
            }
            catch (err) {
                reject(err)
            }
        })
    }
    update(): Promise<IAbout> {
        return new Promise((resolve, reject) => { })
    }
}