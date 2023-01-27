import { signPayload, verifyPayload } from './jwt.sec'
import { verifyToken } from './verify.jwt'

export const jwt = {
    signPayload, verifyPayload, verifyToken
}