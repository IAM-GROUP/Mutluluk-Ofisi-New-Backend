import fs from 'fs'

export const isImageExists = (image: string) => {
    if (fs.existsSync(image) ) {
        fs.rmSync(image)
    }
}