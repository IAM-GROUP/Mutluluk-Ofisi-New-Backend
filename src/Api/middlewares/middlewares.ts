import { aboutMainMultiUploads, aboutMultiUploads, cargoMultiUploads, productMultiUploads } from './multer/multer.middleware'
import { adminAuth } from './auth/admin.middleware'

export const middleware = {
    multer: {
        aboutMainMultiUploads,
        aboutMultiUploads,
        productMultiUploads,
        cargoMultiUploads
    },
    auth: {
        adminAuth
    }
}