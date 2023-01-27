//! Security
import { security } from '../../security/security'

//? Config
import { config } from '../../../core/config/config'

export const addToken = async (token: string) => {
    const redis = await config.redis()
    const check = await redis.EXISTS(token)
    if (check != 1) {
        await redis.SET(token, "valid")
        const payload = security.jwt.token.verifyToken(token)
        if (!payload.status) {
            console.log(payload.token?.payload)
        }
        else {
            return {
                message: payload.message
            }
        }
    }
    else {
        return {
            message: "token already exist in cache"
        }
    }
}
