export const isImageValidation = (images: any[]) => {

    const isValidimage = images.map(image => {
        const ext = image.src.split('.')
            .filter(Boolean)
            .slice(1)
            .join('.')
        if (ext === "jpg" || ext === "jpeg" || ext === "png") {
            return true
        }
        else {
            return false
        }

    })
    return isValidimage.includes(false)
}
