import multer from 'multer'
import { extname } from 'path'

export const aboutStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + `/src/Api/public/about`)
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})

export const aboutMainStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + '/src/Api/public/aboutMain')
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
export const productStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + '/src/Api/public/products')
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
export const cargoStorage = multer.diskStorage({
    destination: (_, _file, cb) => {
        cb(null, process.cwd() + '/src/Api/public/products/cargo')
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})