import { dencrypt, encrypt } from './bcrypt.sec'
import { decrypt as cryde, encrypt as cryen } from './crypto.sec'
import { Sign, Verify } from './jwt.sec'

export const security = {
    crypto: {
        cryde,
        cryen
    },
    bcrypt: {
        dencrypt,
        encrypt
    },
    jwt: {
        Sign,
        Verify
    }
}