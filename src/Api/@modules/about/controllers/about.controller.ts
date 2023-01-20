import { Handler } from 'express'
//! Service
import { AboutService } from '../services/about.service'

//! Security 
import { security } from '../../../security/security'



export class AboutController {
    static getAbout: Handler = async (req, res) => {
        const about = await new AboutService().aboutFindAll()
        res.json({ about })
    }
    static createAbout: Handler = async (req, res) => {

        const aboutService = new AboutService()
        const icons: [{ src: string, context: string }] = [{ src: "", context: "" }]
        const { html, title, description, text, context } = req.body
        
        const { image, icon } = req.files as any | any[]
        icons.push({ src: icon[0].path, context })
        icons.shift()
        //test 
        const encIcon: any = security.encrypt(icons)
      
        
    
        if (encIcon.Error || html.Error) {
            res.json({
                error: encIcon.Error || html.Error
            })
        }
        else {
            const about = await aboutService.aboutCreate(image[0].path, title, text, description, html, encIcon)
            if (about.message) {
                res.json({
                    error: about.message
                })
            }
            else {
                res.json({
                    message: (await about.create)?.message
                })
            }
        }
    }
    static updateAbout: Handler = async (req, res) => {
        const aboutService = new AboutService()
        const { id, html, title, description, text, context } = req.body
        const icons: [{ src: string, context: string }] = [{ src: "", context: "" }]
        const { image, icon } = req.files as any | any[]
        icons.push({ src: icon[0].path, context })
        icons.shift()

        //test 
        const encIcon: any = security.encrypt(icons)
        /* const encHtml: any = security.encrypt(html)  */
        if (encIcon.Error || html.Error) {
            res.json({
                error: encIcon.Error || html.Error
            })
        }
        else {
            const about = aboutService.aboutUpdate(id, image[0].path, title, text, description, html, encIcon)
            if (about.message) {
                res.json({
                    error: about.message
                })
            }
            else {
                res.json({
                    message: (await about.update)?.message
                })
            }
        }
    }
    static deleteAbout: Handler = async (req, res) => {
        const aboutService = new AboutService()
        const { id } = req.body
        const about = aboutService.aboutDelete(id)
        if (about.message) {
            res.json({
                error: about.message
            })
        }
        else {
            res.json({
                message: (await about.delete)?.message
            })
        }

    }
}
