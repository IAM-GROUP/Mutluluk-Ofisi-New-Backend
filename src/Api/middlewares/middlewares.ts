import {announcementUploads,aboutMainMultiUploads, aboutMultiUploads, productMultiUploads,projectConsultantUploads,userUploads } from './multer/multer.middleware'
import { adminAuth } from './auth/admin.middleware'
import { userAuth } from './auth/user.middleware'
import { institutionalAuth } from './auth/Institutional.middleware'

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
        adminAuth,
        userAuth,
        institutionalAuth
    }
}