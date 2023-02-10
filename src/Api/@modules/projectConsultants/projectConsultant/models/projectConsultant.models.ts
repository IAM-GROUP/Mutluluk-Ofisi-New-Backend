import { model, Schema } from 'mongoose'

//! Entity
import { IProjectConsultant } from '../entity/projectConsultant.entity'

const projectConsultantSchema = new Schema<IProjectConsultant>({
    title: {
        type: String
    },
    subTitle: {
        type: String
    },
    text: {
        type: String
    },
    image: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "ProjectConsultantCategory"
    }
})
export const projectConsultant = model('ProjectConsultant', projectConsultantSchema)