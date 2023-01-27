import { createClient } from 'redis'

export const redisConnect = () => {
    createClient({
        url: "redis://localhost:6379"
    }).connect()
}