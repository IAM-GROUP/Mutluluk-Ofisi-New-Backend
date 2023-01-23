import multer from 'multer'

//! Storage
import { aboutStorage, aboutMainStorage } from '../multer/multer.storage'

//! Filter
import { aboutMainUploadFilter, aboutUploadFilter } from './multer.filter'

export const aboutUpload = multer({
    storage: aboutStorage,
    fileFilter: () => aboutUploadFilter
})

export const aboutMainUpload = multer({
    storage: aboutMainStorage,
    fileFilter(req, file, cb) {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
            cb(null, true)
        }
        else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
    }
})