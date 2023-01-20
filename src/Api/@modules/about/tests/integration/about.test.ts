import { describe, it, beforeEach } from '@jest/globals'
import request from 'supertest'


import { server } from '../../../../../server'
import { Dotenv } from '../../../../../core/config/config'


Dotenv.dotenvConfig()

beforeEach(async () => {
    jest.useFakeTimers()
    jest.useRealTimers()
})

const testImagePath = process.cwd() + '/src/Api/public/about/test.jpg'
const IconImagePath = process.cwd() + '/src/Api/public/about/icon.jpg'

describe('About Us Api Testing...', () => {
    it('Get All About Context', () => {
        request(server)
            .get('/api/about-us')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) throw err

            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it('Post About Us', () => {
        request(server)
            .post('/api/about-us')
            .field('html', '{"iv":"cfad375ed3dffe0c765d325f8f47b1a5","encryptedData":"dba036ffc3094bd118a5264ee376eb4c14a1698886d026581e5d5855abd61c8937be76467fb544532eabd5664c5f5196"}')
            .field('title', 'test')
            .field('description', 'description')
            .field('text', 'text')
            .field('context', 'context')
            .attach('image', testImagePath)
            .attach('icon', IconImagePath)
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)

    })
    it('Put About Us', () => {
        request(server)
            .put('/api/about-us')
            .field('html', '{"iv":"cfad375ed3dffe0c765d325f8f47b1a5","encryptedData":"dba036ffc3094bd118a5264ee376eb4c14a1698886d026581e5d5855abd61c8937be76467fb544532eabd5664c5f5196"}')
            .field('title', 'test')
            .field('id', '63c9947cd0e4d88f091f656f')
            .field('description', 'description')
            .field('text', 'text')
            .field('context', 'context')
            .attach('image', testImagePath)
            .attach('icon', IconImagePath)
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it('Delete About Us', () => {
        request(server)
            .delete('/api/about-us')
            .field('id', '63c9947cd0e4d88f091f656f')
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })

})