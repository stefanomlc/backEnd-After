import mongoose, {Schema}from 'mongoose';
import { MongooseManager } from './mongooseManager.js';

const productSchema = new Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
}, {versionKey: false})

const productDb = mongoose.model("products", productSchema)

export const productsManager = new MongooseManager(productDb)