import fs from 'fs'

export const isImageExists = (image: string,icon:string) => {
    if (fs.existsSync(image) || fs.existsSync(icon)) {
        fs.rmSync(image)
        fs.rmSync(icon)
    }
    else {
        fs.mkdirSync(process.cwd() + 'src/Api/public/about')
    }
}