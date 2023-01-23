import multer from 'multer'
import { extname } from 'path'

export const aboutStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd() + `/src/Api/public/about`)
    },
    filename: (req, file, cb) => {

        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
