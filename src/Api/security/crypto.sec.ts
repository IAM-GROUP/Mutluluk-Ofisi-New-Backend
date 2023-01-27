import Crypto from 'cryptr'

//! Config
import { Dotenv } from '../../core/config/config'
Dotenv.dotenvConfig()

const cryptr = new Crypto(process.env.SECRET_KEY as string)

export const encrypt = (text: any | any[]) => {
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
        return JSON.parse(cryptr.decrypt(text))
        
    } catch (err) {
        return {
            Error: err
        }
    }

}
