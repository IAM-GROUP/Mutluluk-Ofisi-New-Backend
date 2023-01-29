import { aboutMainMultiUploads, aboutMultiUploads } from './multer/multer.middleware'
import { adminAuth } from './auth/admin.middleware'

export const middleware = {
    multer: {
        aboutMainMultiUploads,
        aboutMultiUploads
    },
    auth: {
        adminAuth
    }
}