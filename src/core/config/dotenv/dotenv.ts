import { config } from 'dotenv'

export const dotenvDevConfig = () => {
    config({path:"../../.env.dev"})
}
export const dotenvProdConfig = () => {
    config({path:"../../.env.prod"})
}