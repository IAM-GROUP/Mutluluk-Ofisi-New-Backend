import { Handler } from 'express'
//! Service
import { ProductService } from '../services/product.services'

export class ProductController {
    static getProduct: Handler = async (req, res) => {
        const product = await new ProductService().productFindAll()
        res.json({ product })
    }
    static getProductId: Handler = async (req, res) => {
        const { id } = req.body
        const product = new ProductService().productFind(id)
        res.json({ product: await product.product })
    }
    static createProduct: Handler = async (req, res) => {
        const productService = new ProductService()
        const cargos: [{ title: string, src: string }] = [{ title: "", src: "" }]
        const images: [{ src: string }] = [{ src: "" }]
        const { name, description, types, quantity, price, discount, property, category, CargoTitle } = req.body
        const { image, cargo } = req.files as any | any[]
        cargos.push({ src: cargo[0].path, title: CargoTitle })
        images.push({ src: image[0].path })
        cargos.shift()
        images.shift()
        const product = await productService.productCreate(name, description, types, quantity, price, discount, images, cargos, property, category)
        if (product.message) {
            res.json({
                error: product.message
            })
        }
        else {
            res.json({
                message: await product.create
            })
        }

    }
    static updateProduct: Handler = async (req, res) => {
        const productService = new ProductService()
        const cargos: [{ title: string, src: string }] = [{ title: "", src: "" }]
        const images: [{ src: string }] = [{ src: "" }]
        const { id, name, description, types, quantity, price, discount, property, category, CargoTitle } = req.body
        const { image, cargo } = req.files as any | any[]
        cargos.push({ src: cargo[0].path, title: CargoTitle })
        images.push({ src: image[0].path })
        cargos.shift()
        images.shift()
        const product = productService.productUpdate(id, name, description, types, quantity, price, discount, images, cargos, property, category)
        if (product.message) {
            res.json({
                error: product.message
            })
        }
        else {
            res.json({
                message: await product.update
            })
        }

    }
    static deleteProduct: Handler = async (req, res) => {
        const productService = new ProductService()
        const { id } = req.body
        const product = productService.productDelete(id)
        if (product.message) {
            res.json({
                error: product.message
            })
        }
        else {
            res.json({
                message: await product.delete
            })
        }

    }
}
