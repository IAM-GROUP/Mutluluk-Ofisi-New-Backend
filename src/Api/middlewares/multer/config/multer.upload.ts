import multer from 'multer'

//! Storage
import { aboutStorage, aboutMainStorage, productStorage } from '../config/multer.storage'

//! Filter
import { aboutMainUploadFilter, aboutUploadFilter, productUploadFilter } from './multer.filter'

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