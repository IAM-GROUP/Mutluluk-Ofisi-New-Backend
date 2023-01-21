import Crypto from 'cryptr'

//! Config
import { Dotenv } from '../../core/config/config'

Dotenv.dotenvConfig()

export const encrypt = (text: any | any[]) => {
    const cryptr = new Crypto(process.env.SECRET_KEY as string)
    try {
        return cryptr.encrypt(JSON.stringify(text))
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
        return JSON.parse(cryptr.decrypt(text))
        
    } catch (err) {
        return {
            Error: err
        }
    }

}
