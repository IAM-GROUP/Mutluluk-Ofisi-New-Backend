import { sign, verify } from 'jsonwebtoken'
//! Config
import { config } from '../../../core/config/config'

config.Dotenv()
const redis = config.redis()



export const signPayload = (payload: {}) => {
    try {
        return {
            payload: sign(payload, process.env.SECRET_KEY as string, {
                algorithm: "RS256",
                expiresIn: '1h'
            })
        }
    }
    catch (err) {
        return {
            err
        }
    }
}

export const verifyPayload = (token: string) => {
    try {
        return {
            payload: verify(token, process.env.SECRET_KEY as string)
        }
    }
    catch (err) {
        return {
            err
        }
    }
}