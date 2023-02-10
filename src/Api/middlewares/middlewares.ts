import { aboutMainMultiUploads, aboutMultiUploads, productMultiUploads,projectConsultantUploads } from './multer/multer.middleware'
import { adminAuth } from './auth/admin.middleware'

export const middleware = {
    multer: {
        aboutMainMultiUploads,
        aboutMultiUploads,
        productMultiUploads,
        projectConsultantUploads
    },
    auth: {
        adminAuth
    }
}