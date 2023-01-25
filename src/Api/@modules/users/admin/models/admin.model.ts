import { model, Schema } from 'mongoose'

//! Entity
import { IAdmin } from '../entity/IAdmin'

const AdminSchema = new Schema<IAdmin>({
    email: {
        type: String
    },
    password: {
        type: String
    }
})
export const Admin = model('Admin', AdminSchema)