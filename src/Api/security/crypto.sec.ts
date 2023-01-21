import Crypto from 'cryptr'

//! Config

const cryptr = new Crypto("Rade")

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
