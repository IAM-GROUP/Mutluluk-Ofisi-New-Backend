export interface IProduct {
    name: string
    description: string
    types: [{ type: string, context: string }]
    quantity: number
    images: [{ src: string }]
    cargo: [{ title: string, src: string }]
    property: string

}