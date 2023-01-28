import { Handler } from 'express'

//! Security
import { security } from '../../security/security'

export const adminAuth: Handler = ({ headers }, res, next) => {
    const verify = security.jwt.token.verifyToken(headers['x-access-token'] as string)
    if (verify.message) {
        return res.status(verify.status as number).json(verify.message)
    }
    else {
        console.log(verify.token?.payload?.email)
    }
}