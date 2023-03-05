import multer from 'multer'

//! Storage
import { announcementStorage, aboutStorage,BlogMainStorage ,aboutMainStorage, productStorage, OpenEduStorage, projectConsultantStorage, userStorage, institutionalStorage, solutionMainStorage, MainStorage, AcademyStorage } from '../config/multer.storage'

//! Filter
import { announcementUploadFilter, aboutMainUploadFilter, BlogMainUploadFilter,aboutUploadFilter, OpenEduUploadFilter, AcademyUploadFilter, productUploadFilter, projectConsultantUploadFilter, userUploadFilter, institutionalUploadFilter, MainUploadFilter, solutionMainUploadFilter } from './multer.filter'

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
export const institutionalUpload = multer({
    storage: institutionalStorage,
    fileFilter: (_, file, cb) => institutionalUploadFilter({ _, file, cb })
})
export const solutionMainUpload = multer({
    storage: solutionMainStorage,
    fileFilter: (_, file, cb) => solutionMainUploadFilter({ _, file, cb })
})
export const MainUpload = multer({
    storage: MainStorage,
    fileFilter: (_, file, cb) => MainUploadFilter({ _, file, cb })
})
export const AcademyUpload = multer({
    storage: AcademyStorage,
    fileFilter: (_, file, cb) => AcademyUploadFilter({ _, file, cb })
})
export const OpenEduUpload = multer({
    storage: OpenEduStorage,
    fileFilter: (_, file, cb) => OpenEduUploadFilter({ _, file, cb })
})
export const BlogMainUpload = multer({
    storage: BlogMainStorage,
    fileFilter: (_, file, cb) => BlogMainUploadFilter({ _, file, cb })
})
