export const isIdValidation = (id: string, message: string): { isValid: boolean, message: string } => {
    if (typeof id === 'string') {
        if (id !== "") {
            return {
                message,
                isValid: true
            }
        }
        else {
            return {
                message,
                isValid: false
            }
        }
    }
    else {
        return {
            message,
            isValid: false
        }
    }
}