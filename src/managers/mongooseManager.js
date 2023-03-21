import mongoose from "mongoose";

export class MongooseManager {
    
    constructor(collectionName, schema) {
        this.collection = mongoose.model(collectionName, new mongoose.Schema(schema, { versionKey: false }))
    }

    async productSave (product) {
        return await this.collection.create(product)
    }

    async findProducts (){
        return await this.collection.find({}).lean()
    }
    
    async reset() {
        /* return await this.#db.deleteMany({}) */
    }

}