import { connect } from 'mongoose'
import chalk from 'chalk'
//! Config
import { Dotenv } from '../../config/config'

Dotenv.dotenvDevConfig()

export const mongoConnection = async () => {
    try {
        await connect(`/mongodb://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/?authSource=${process.env.MONGO_DB_NAME}`)
    }
    catch(exception) {
        console.log(chalk.red('not connection ' + exception))
    }
}