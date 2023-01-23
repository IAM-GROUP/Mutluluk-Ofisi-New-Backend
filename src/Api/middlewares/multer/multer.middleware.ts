import { aboutUpload, aboutMainUpload } from './config/multer.upload'



export const aboutMultiUploads = aboutUpload.fields([{ name: "image", maxCount: 4 }, { name: "icon", maxCount: 4 }])
export const aboutMainMultiUploads = aboutMainUpload.fields([{ name: "image", maxCount: 1 }])