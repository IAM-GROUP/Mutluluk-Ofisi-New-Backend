import { Handler } from 'express'

//! Security
import { security } from '../../security/security'

//! Service
import { AdminService } from '../../@modules/users/admin/services/admin.service'

//! Cache
import { cache } from '../../cache/cache'

export const adminAuth: Handler = async ({ headers }, res, next) => {
    const adminService = new AdminService()
    const token = headers['x-access-token'] as string
    if (token) {
        const isRedisToken = cache.redis.Token.checkToken(token)
        if ((await isRedisToken).status === "valid") {
            const verify = security.jwt.token.verifyToken(token)
            if (verify.message) {
                res.status(verify.status as number).json(verify.message)
            }
            else {
                const email = verify.token?.payload?.email
                const isEmail = await adminService.adminFindEmail(email as string)
                if (isEmail.email) {
                    next()
                }
                else {
                    res.status(401).json({ message: isEmail.message })
                }

            }
        }
        else {
            res.status(401).json({ message: (await isRedisToken).message })
        }
    }
    else {
        res.status(401).json({
            message: "token not found"
        })
    }

}