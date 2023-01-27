import { sign, verify } from 'jsonwebtoken'

//! Config
import { Dotenv } from '../../../core/config/config'

Dotenv.dotenvConfig()

export const Sign = (payload: string) => {
    return sign(payload, process.env.SECRET_KEY as string)
}