import { Handler } from 'express'

//! Security
import { verifyPayload } from './jwt.sec'

export const verifyToken: Handler = (req, res, next) => {
    const token = req.headers['x-access-token'] as string
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