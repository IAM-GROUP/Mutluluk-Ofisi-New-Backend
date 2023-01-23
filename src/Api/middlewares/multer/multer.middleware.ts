import { aboutUpload } from './multer.upload'



export const aboutMultiUploads = aboutUpload.fields([{ name: "image", maxCount: 4 }, { name: "icon", maxCount: 4 }])