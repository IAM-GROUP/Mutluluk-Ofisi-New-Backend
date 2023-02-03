import { aboutMainMultiUploads, aboutMultiUploads, productMultiUploads } from './multer/multer.middleware'
import { adminAuth } from './auth/admin.middleware'

export const middleware = {
    multer: {
        aboutMainMultiUploads,
        aboutMultiUploads,
        productMultiUploads
    },
    auth: {
        adminAuth
    }
}