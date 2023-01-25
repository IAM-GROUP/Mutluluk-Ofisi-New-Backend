//! Dto
import { IUser } from '../../dtos/IUsers'

export interface IAdmin extends IUser {
    companyName: string,
    position: string,
    activityField: string
    businessType: string
    taxOffice: string
    identity: number
    companyAddress: string
    city: string,
    district: string
    service: string
}
