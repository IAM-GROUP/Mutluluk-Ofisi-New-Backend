import {announcementUploads,aboutMainMultiUploads, aboutMultiUploads, productMultiUploads,projectConsultantUploads,userUploads } from './multer/multer.middleware'
import { adminAuth } from './auth/admin.middleware'

export const middleware = {
    multer: {
        aboutMainMultiUploads,
        aboutMultiUploads,
        productMultiUploads,
        projectConsultantUploads,
        announcementUploads,
        userUploads
    },
    auth: {
        adminAuth
    }
}