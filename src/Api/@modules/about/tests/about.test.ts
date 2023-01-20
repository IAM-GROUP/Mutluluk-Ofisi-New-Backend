import { describe,test,expect,it } from '@jest/globals'
import  request from 'supertest'


//!
import { server } from '../../../../server'

describe('About Us Api Testing...',()=>{
    it('Get All About Context',()=>{
        request(server)
        .get('/api/about-us')
        .expect('Content-Type',/json/)
        .expect(200)
        .end((err,res)=>{
            if(err) throw err
            
        })
    })
})