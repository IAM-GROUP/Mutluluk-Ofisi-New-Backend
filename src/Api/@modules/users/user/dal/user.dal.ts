//? Repository
import { UserRepository } from '../repository/user.repo'

//? Entity
import { IUser } from '../../dtos/IUsers'

//? Models
import { User } from '../models/user.models'

//? DataBase
import { neo4j } from '../../../../../core/data-source/neo4j/connection'

export class UserDal implements UserRepository {
    async delete(id: string): Promise<{ message: string }> {
        await neo4j()?.cypher("match (u:user {id:$id}) delete u",{ id:id })
        return new Promise((resolve, reject) => {
            try {
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(name: string, surname: string, email: string,phone:string,password:string,dateOfBirth:string,gender:string,roles:string,basket:string,order:string,creditCardName:string,creditCardSurname:string,creditCardNumber:string,creditCardCvv:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await User?.create({name,surname,email,phone,password,dateOfBirth,gender,roles,basket,order,creditCardName,creditCardSurname,creditCardNumber,creditCardCvv})
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IUser> {
        return new Promise(async (resolve, reject) => {
            try {
                const menu = await neo4j()?.cypher("match (u:user {id:$id} return u.id,u.name)")
                resolve(menu as IUser)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IMenu[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const menu = await Menu.find()
                resolve(menu as IMenu[])
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, name: string, type: string, status: boolean): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const menu = await Menu.findByIdAndUpdate(id, { name, type, status })
                menu?.save()
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}