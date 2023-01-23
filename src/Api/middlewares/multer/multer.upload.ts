import multer from 'multer'

//! Storage
import { aboutStorage } from '../multer/multer.storage'

export const aboutUpload = multer({
    storage:aboutStorage,
    fileFilter(req, file, cb) {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
            cb(null, true)
        }
        else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
    },
})