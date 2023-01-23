import multer from 'multer'

//! Storage
import { aboutStorage, aboutMainStorage } from '../config/multer.storage'

//! Filter
import { aboutMainUploadFilter, aboutUploadFilter } from './multer.filter'

export const aboutUpload = multer({
    storage: aboutStorage,
    fileFilter: (_,file,cb) => aboutUploadFilter({_,file,cb})
})

export const aboutMainUpload = multer({
    storage: aboutMainStorage,
    fileFilter:(_,file,cb) => aboutMainUploadFilter({_,file,cb})
})