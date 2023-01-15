import { Handler } from 'express'

//! Service
import { AboutService } from '../services/about.service'


export const getAbout: Handler = async (req, res) => {
    
    const about = await new AboutService().aboutFindAll()
    console.log(about)
}