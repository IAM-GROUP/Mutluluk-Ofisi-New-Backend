import multer from 'multer'
import { extname } from 'path'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd() + `/src/Api/public`)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
export const upload = multer({ storage })