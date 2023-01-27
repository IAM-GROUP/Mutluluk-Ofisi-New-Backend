//! Security
import { security } from '../../security/security'
import { JwtPayload } from 'jsonwebtoken'
//? Config
import { config } from '../../../core/config/config'


export const addToken = async (token: string) => {
    const redis = await config.redis()
    try {
        const check = await redis.EXISTS(token)
        if (check != 1) {
            await redis.SET(token, "valid")
            const payload = security.jwt.token.verifyToken(token)
            if (!payload.status) {
                await redis.EXPIREAT("NX", payload.token?.payload?.exp as number)
                return
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
    } catch (error) {
        return {
            message: "Token not added to cache"
        }
    }

}
export const checkToken = async (token: string) => {
    const redis = await config.redis()
    try {
        const status = await redis.GET(token)
        return {
            status
        }
    } catch (error) {
        return {
            message: "Fetching token from cache failed"
        }
    }
}
