import multer from 'multer'

//! Storage
import { announcementStorage, aboutStorage, aboutMainStorage, productStorage, projectConsultantStorage,userStorage } from '../config/multer.storage'

//! Filter
import { announcementUploadFilter, aboutMainUploadFilter, aboutUploadFilter, productUploadFilter, projectConsultantUploadFilter,userUploadFilter } from './multer.filter'

export const aboutUpload = multer({
    storage: aboutStorage,
    fileFilter: (_, file, cb) => aboutUploadFilter({ _, file, cb })
})

export const aboutMainUpload = multer({
    storage: aboutMainStorage,
    fileFilter: (_, file, cb) => aboutMainUploadFilter({ _, file, cb })
})
export const productUpload = multer({
    storage: productStorage,
    fileFilter: (_, file, cb) => productUploadFilter({ _, file, cb })
})
export const projectConsultantUpload = multer({
    storage: projectConsultantStorage,
    fileFilter: (_, file, cb) => projectConsultantUploadFilter({ _, file, cb })
})
export const announcementUpload = multer({
    storage: announcementStorage,
    fileFilter: (_, file, cb) => announcementUploadFilter({ _, file, cb })
})
export const userUpload = multer({
    storage: userStorage,
    fileFilter: (_, file, cb) => userUploadFilter({ _, file, cb })
})