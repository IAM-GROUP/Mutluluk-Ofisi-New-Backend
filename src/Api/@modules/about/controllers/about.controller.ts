import { Handler } from 'express'

//! Service
import { AboutService } from '../services/about.service'


export class AboutController {
    static getAbout: Handler = async (req, res) => {
        const about = await new AboutService().aboutFindAll()
        res.json({ about })
    }
    static createAbout:Handler = async (req,res) => {
        const icon = []
        console.log(req.body)
        
    }
}
