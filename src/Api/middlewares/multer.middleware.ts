import multer from 'multer'
import { extname } from 'path'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd() + `/src/Api/public/about`)
    },
    filename: (req, file, cb) => {

        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname))
    }
})
const upload = multer({
    storage,
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

export const multiuploads = upload.fields([{ name: "image", maxCount: 4 }, { name: "icon", maxCount: 4 }])