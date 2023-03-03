const Iyzipay = require('iyzipay');

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
        return new Promise(async (resolve, reject) => {
            try {
                await neo4j()?.writeCypher("match (u:user {id:$id}) detach delete u", { id: id })
                return resolve({ message: "Success deleted" })
            }
            catch (err) {
                return reject({ message: "Error " + err })
            }
        })
    }
    async create(name: string, surname: string, email: string, image: string, phone: string, password: string, dateOfBirth: string, gender: string, basket: string, order: string, creditCardName: string, creditCardSurname: string, creditCardNumber: string, creditCardCvv: string, city: string, country: string, address: string, zipCode: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await User?.create({ name, surname, email, image, phone, password, dateOfBirth, gender, basket, order, creditCardName, creditCardSurname, creditCardNumber, creditCardCvv, city, country, address, zipCode })
                resolve({ message: "Success created" })
            } catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async find(id: string): Promise<IUser> {
        return new Promise(async (resolve, reject) => {
            try {
                const user: any = await neo4j()?.cypher("match (u:user {id:$id}) return u.id,u.name,u.surname,u.email,u.image,u.dateOfBirth,u.gender,u.basket,u.order,u.creditCardName,u.creditCardSurname,u.creditCardNumber,u.creditCardCvv,u.city,u.country,u.address,u.zipCode", { id })
                const rUser = user.records.map((uss: any) => {
                    return uss.map((res: any) => {
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
    async findAll(): Promise<IUser[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const user: any = await neo4j()?.cypher("match (u:user) return u", {})
                const rUser = user.records.map((uss: any) => {
                    return uss.map((res: any) => {
                        return res.properties
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async update(id: string, name: string, surname: string, email: string, image: string, phone: string, password: string, dateOfBirth: string, gender: string, basket: string, order: string, creditCardName: string, creditCardSurname: string, creditCardNumber: string, creditCardCvv: string, city: string, country: string, address: string, zipCode: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.writeCypher("match (u:user {id:$id}) set u.name=$name,u.surname=$surname,u.email=$email,u.image=$image,u.phone=$phone,u.password=$password,u.dateOfBirth=$dateOfBirth,u.gender=$gender,u.basket=$basket,u.order=$order,u.creditCardName=$creditCardName,u.creditCardSurname=$creditCardSurname,u.creditCardNumber=$creditCardNumber,u.creditCardCvv=$creditCardCvv,u.city=$city,u.country=$country,u.address=$address,u.zipCode=$zipCode return u", {
                    id, name, surname, email, image, phone, password, dateOfBirth, gender, basket, order, creditCardName, creditCardSurname, creditCardNumber, creditCardCvv, city, country, address, zipCode
                })
                resolve({ message: "Success update" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async follow(follow: string, followers: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.writeCypher("match (f1:user {id:$follow}) match(f2:user {id:$followers}) create(f1)-[follow:FOLLOW]->(f2) create (f2)-[followers:FOLLOWERS]->(f1) ", { follow, followers });

                resolve({ message: "Success following" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async unFollow(follow: string, followers: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.writeCypher("match(f1:user {id:$follow})-[follow:FOLLOW]->(f2:user {id:$followers}) match(f2:user {id:$followers})-[followers:FOLLOWERS]->(f1:user {id:$follow}) delete followers,follow", { follow, followers })
                resolve({ message: "Success un follow" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async getFollow(id: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.cypher("match (n:user {id:$id})-[follow:FOLLOW]->(n1:user) return n1.id,n1.name,n1.surname,n1.email,n1.image,n1.phone,n1.password,n1.dateOfBirth,n1.gender,n1.basket,n1.order,n1.creditCardName,n1.creditCardSurname,n1.creditCardNumber,n1.creditCardCvv,n1.city,n1.country,n1.address,n1.zipCode", { id: id })
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
    async getFollowers(id: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.cypher("match (n:user {id:$id})-[followers:FOLLOWERS]->(n1:user) return  n1.id,n1.name,n1.surname,n1.email,n1.image,n1.phone,n1.password,n1.dateOfBirth,n1.gender,n1.basket,n1.order,n1.creditCardName,n1.creditCardSurname,n1.creditCardNumber,n1.creditCardCvv,n1.city,n1.country,n1.address,n1.zipCode", { id: id })
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
    async addBasket(id: string, basket: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.writeCypher(`match (u:user {id:'${id}'}) set u.basket='${basket}' return u`, {})
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res.properties
                    })
                })
                resolve({ message: "Success Add Basket" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async getBasket(id: string): Promise<IUser> {
        return new Promise(async (resolve, reject) => {
            try {
                const user: any = await neo4j()?.cypher("match (u:user {id:$id}) return u.id,u.basket", { id })
                const rUser = user.records.map((uss: any) => {
                    return uss.map((res: any) => {
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
    async addOrder(id: string, order: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.writeCypher(`match (u:user {id:'${id}'}) set u.order='${order}' return u`, {})
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res.properties
                    })
                })
                resolve({ message: "Success Add Order" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async getOrder(id: string): Promise<IUser> {
        return new Promise(async (resolve, reject) => {
            try {
                const user: any = await neo4j()?.cypher("match (u:user {id:$id}) return u.id,u.order", { id })
                const rUser = user.records.map((uss: any) => {
                    return uss.map((res: any) => {
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
    async addRoles(name: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await neo4j()?.writeCypher("create (r:role {name:$name})", { name })
                resolve({ message: "Success role" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async getRoles(): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.cypher("match (r:role) return r", {})
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res.properties
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async updateRoles(id: string, name: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.writeCypher(`match (u:user {id:'${id}'}) set u.name='${name}' return u`, {})
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res.properties
                    })
                })
                resolve({ message: "Success Update Role" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async getRole(id: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.cypher("match (r:role {id:$id}) return r.id,r.name", { id })
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
    async deleteRoles(id: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                await neo4j()?.writeCypher("match (r:role {id:$id}) delete r", { id })
                resolve({ message: "Deleted role" })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async addUserRole(userId: string, roleId: string): Promise<{ message: string }> {
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
    async deleteUserRole(userId: string, roleId: string): Promise<{ message: string }> {
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
    async getUserRole(id: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.cypher("match (n:user {id:$id})-[rol:ROLE]->(r:role) return r.name", { id: id })
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
    async getRoleUser(id: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.cypher("match (r:role {id:$id})-[user:USER]->(u:user) return u.id,u.name,u.surname", { id: id })
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
    async getUserEmail(email: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.cypher("match (u:user {email:$email}) return u.email,u.password", { email })
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
    async getSign(email: string, password: string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await neo4j()?.cypher("match (u:user {email:$email,password:$password}) return u", { email, password })
                const rUser = user?.records.map(uss => {
                    return uss.map(res => {
                        return res.properties
                    })
                })
                resolve(rUser as any)
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
    async payment(id:string): Promise<{ message: string }> {
        return new Promise(async (resolve, reject) => {
            try {
                const iyzipay = new Iyzipay({
                    apiKey:"sandbox-9xcTDLFciF1PiqfZlOG4pZ9XitSLpSQk",
                    secretKey:"sandbox-BZCqOiZqjxYjDGNvCtPKGHdQzpRX96O5",
                    uri: 'https://sandbox-api.iyzipay.com'
                })
                var request = {
                    locale: Iyzipay.LOCALE.TR,
                    conversationId: '123456789',
                    price: '1',
                    paidPrice: '1.2',
                    currency: Iyzipay.CURRENCY.TRY,
                    installment: '1',
                    basketId: 'B67832',
                    paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
                    paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
                    paymentCard: {
                        cardHolderName: 'John Doe',
                        cardNumber: '5528790000000008',
                        expireMonth: '12',
                        expireYear: '2030',
                        cvc: '123',
                        registerCard: '0'
                    },
                    buyer: {
                        id: 'BY789',
                        name: 'John',
                        surname: 'Doe',
                        gsmNumber: '+905350000000',
                        email: 'email@email.com',
                        identityNumber: '74300864791',
                        lastLoginDate: '2015-10-05 12:43:35',
                        registrationDate: '2013-04-21 15:12:09',
                        registrationAddress: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
                        ip: '85.34.78.112',
                        city: 'Istanbul',
                        country: 'Turkey',
                        zipCode: '34732'
                    },
                    shippingAddress: {
                        contactName: 'Jane Doe',
                        city: 'Istanbul',
                        country: 'Turkey',
                        address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
                        zipCode: '34742'
                    },
                    billingAddress: {
                        contactName: 'Jane Doe',
                        city: 'Istanbul',
                        country: 'Turkey',
                        address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
                        zipCode: '34742'
                    },
                    basketItems: [
                        {
                            id: 'BI101',
                            name: 'Binocular',
                            category1: 'Collectibles',
                            category2: 'Accessories',
                            itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                            price: '0.3'
                        },
                        {
                            id: 'BI102',
                            name: 'Game code',
                            category1: 'Game',
                            category2: 'Online Game Items',
                            itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL,
                            price: '0.5'
                        },
                        {
                            id: 'BI103',
                            name: 'Usb',
                            category1: 'Electronics',
                            category2: 'Usb / Cable',
                            itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                            price: '0.2'
                        }
                    ]
                };
                 
                iyzipay.payment.create(request, function (err:any, result:any) {
                    console.log(err)
                    console.log(result)
                });
                resolve({ message: "devami gelecek " })
            }
            catch (err) {
                reject({ message: "Error " + err })
            }
        })
    }
}