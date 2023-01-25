import { hashSync, compareSync } from 'bcrypt'

//! Config
import { Dotenv } from '../../core/config/config'

Dotenv.dotenvConfig()

export const encrypt = (password: string) => {
    return hashSync(password, process.env.SECRET_KEYS as string)
}
export const dencrypt = (password: string, hash: string) => {
    return compareSync(password, hash)
}