import { Router, json } from 'express'
import { MongooseManager } from '../../managers/mongooseManager'

export const apiRouter = Router()
apiRouter.use(json())

const Manager = new MongooseManager ()

apiRouter.get('/', (req, res, next) => {
    try {
        const allProducts = await Manager.findProducts
        return allProducts
             
    } catch (error) {
        next(error)
    }
})

apiRouter.post("/", (req, res, next){
    try {

        
    } catch (error) {
        next(error)        
    }
})