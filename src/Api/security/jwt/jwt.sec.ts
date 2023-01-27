import { sign, verify } from 'jsonwebtoken'

//! Config
import { Dotenv } from '../../../core/config/config'

Dotenv.dotenvConfig()

export const signPayload = (payload: string) => {
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