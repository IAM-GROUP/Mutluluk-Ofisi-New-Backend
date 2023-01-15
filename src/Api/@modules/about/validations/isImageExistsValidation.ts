import fs from 'fs'

export const isImageExists = (image: string) => {
    if (fs.existsSync(image)) {
        fs.rmSync(image)
    }
    else {
        fs.mkdir(process.cwd() + 'src/Api/public/about', (err) => {
            return {
                message: err
            }
        })
    }
}