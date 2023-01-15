import swaggerjsdoc from 'swagger-jsdoc'

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Happy backend",
            version: "1.0.0",
            description: "Happy backend project"
        },
        servers: [
            {
                url: "http://127.0.0.1:3000"
            }
        ]
    },
    apis: [process.cwd() + 'src/Api/@modules/about/controllers/about.controller.ts']
}
export const swagger = swaggerjsdoc(options)
