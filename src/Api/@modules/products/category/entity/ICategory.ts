import { Schema } from 'mongoose'

export interface ICategory {
    title: string
    categoryMain: Schema.Types.ObjectId
}