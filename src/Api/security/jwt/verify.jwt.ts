//! Security
import { verifyPayload } from './jwt.sec'

export const verifyToken = (token:string) => {
    if (token) {
        return verifyPayload(token)
    }
    else {
        return {
            message: "Unauthorized",
            status: 401
        }
    }
}