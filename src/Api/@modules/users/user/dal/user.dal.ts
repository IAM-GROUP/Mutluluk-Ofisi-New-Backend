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
    async create(name: string, surname: string, email: string,image:string,phone:string,password:string,dateOfBirth:string,gender:string,basket:string,order:string,creditCardName:string,creditCardSurname:string,creditCardNumber:string,creditCardCvv:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await User?.create({name,surname,email,image,phone,password,dateOfBirth,gender,basket,order,creditCardName,creditCardSurname,creditCardNumber,creditCardCvv})
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IUser> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.cypher("match (u:user {id:$id} return u.id,u.name,u.surname,u.email,u.image,u.dateOfBirth,u.gender,u.basket,u.order,u.creditCardName,u.creditCardSurname,u.creditCardNumber,u.creditCardCvv)",{})
                resolve(user as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async findAll(): Promise<IUser[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const user =  await neo4j()?.cypher("match (u:user) return u",{})
                resolve(user as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, name: string, surname: string, email: string,image:string,phone:string,password:string,dateOfBirth:string,gender:string,basket:string,order:string,creditCardName:string,creditCardSurname:string,creditCardNumber:string,creditCardCvv:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.writeCypher("match (u:user {id:$id}) set u.name=$name,u.surname=$surname,u.email=$email,u.image=$image,u.phone=$phone,u.password=$password,u.dateOfBirth=$dateOfBirth,u.gender=$gender,u.basket=$basket,u.order=$order,u.creditCardName=$creditCardName,u.creditCardSurname=$creditCardSurname,u.creditCardNumber=$creditCardNumber,u.creditCardCvv=$creditCardCvv return u",{
                    id,name,surname,email,image,phone,password,dateOfBirth,gender,basket,order,creditCardName,creditCardSurname,creditCardNumber,creditCardCvv    
                })
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async follow(follow: string, followers:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user =await neo4j()?.writeCypher("match (f1:user {id:$follow}) match(f2:user {id:$followers}) create(f1)-[follow:FOLLOW]->(f2) create (f2)-[followers:FOLLOWERS]->(f1) ", { follow, followers });
                resolve({ message: "Success following" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async unFollow(follow: string, followers:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user =await neo4j()?.writeCypher("match(f1:user {id:$follow})-[follow:FOLLOW]->(f2:user {id:$followers}) match(f2:user {id:$following})-[followers:FOLLOWERS]->(f1:user {id:$follow}) delete followers,follow", { follow, followers });
                resolve({ message: "Success un follow" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async getFollow(id:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user =await neo4j()?.cypher("match (n:user {id:$id})-[follow:FOLLOW]->(n1:user) return n1.id,n1.name,n1.surname,n1.email,n1.image,n1.phone,n1.password,n1.dateOfBirth,n1.gender,n1.basket,n1.order,n1.creditCardName,n1.creditCardSurname,n1.creditCardNumber,n1.creditCardCvv", { id: id })
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async getFollowers(id:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user =await neo4j()?.cypher("match (n:user {id:$id})-[followers:FOLLOWERS]->(n1:user) return return n1.id,n1.name,n1.surname,n1.email,n1.image,n1.phone,n1.password,n1.dateOfBirth,n1.gender,n1.basket,n1.order,n1.creditCardName,n1.creditCardSurname,n1.creditCardNumber,n1.creditCardCvv", { id: id })
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async addBasket(id:string,basket:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user =await neo4j()?.writeCypher(`match (u:user {id:'${id}'}) set u.basket='${basket}' return u`,{})
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async addOrder(id:string,order:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user =await neo4j()?.writeCypher(`match (u:user {id:'${id}'}) set u.order='${order}' return u`,{})
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async addRoles(name:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await neo4j()?.writeCypher("create (r:role {name:$name})",{name})
                resolve({ message: "Success role" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async deleteRoles(name:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await neo4j()?.writeCypher("match (r:role {name:$name}) delete r",{name})
                resolve({ message: "Deleted role" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async addUserRole(userId: string, roleId:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await neo4j()?.writeCypher("match (u:user {id:$userId}) match(r:role {id:$roleId}) create(u)-[rol:ROLE]->(r) create (r)-[user:USER]->(u) ", { userId, roleId });
                resolve({ message: "Success user role rel" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async deleteUserRole(userId: string, roleId:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await neo4j()?.writeCypher("match(u:user {id:$userId})-[rol:ROLE]->(r:role {id:$roleId}) match(r:role {id:$roleId})-[user:USER]->(u:user {id:$userId}) delete rol,user", { userId, roleId });
                resolve({ message: "Success user role rel" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}