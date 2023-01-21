import Crypto from 'cryptr'

//! Config
import { Dotenv } from '../../core/config/config'

Dotenv.dotenvConfig()

export const encrypt = (text: any | any[]) => {
    const cryptr = new Crypto(process.env.SECRET_KEY as string)
    try {
        return cryptr.encrypt(text)
    }
    catch (err) {
        return {
            Error: err
        }
    }

}

export const decrypt = (text: any | any[]) => {
    try {
        const cryptr = new Crypto(process.env.SECRET_KEY as string)
        return cryptr.decrypt(text)
        
    } catch (err) {
        return {
            Error: err
        }
    }

}
