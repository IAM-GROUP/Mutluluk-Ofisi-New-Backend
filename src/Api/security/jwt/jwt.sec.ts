import jwt,{JwtPayload} from 'jsonwebtoken'
//! Config
import { config } from '../../../core/config/config'

config.Dotenv()
const redis = config.redis()



export const signPayload = (payload: {}) => {
    try {
        return {
            payload: jwt.sign(payload, process.env.SECRET_KEY as string, {
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
            payload: jwt.verify(token, process.env.SECRET_KEY as string) as JwtPayload
        }
    }
    catch (err) {
        return {
            err:err as string
        }
    }
}