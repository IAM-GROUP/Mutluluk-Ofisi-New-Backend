import { ObjectId } from 'mongoose'
export interface IOpenEdu {
    name: string
    description: string
    thumbnail_image: string
    html: string
    date: string
    status: boolean
    category: ObjectId

}