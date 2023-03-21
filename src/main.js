import express  from "express";
import mongoose from "mongoose";
import { MONGODB_CNX_STR } from './config.js';
import { productsManager } from "./managers/productsManager.js";
import { PORT } from "./config/servidor.js";
import { apiRouter } from './routers/api/api.router.js'


await mongoose.connect(MONGODB_CNX_STR)

await productsManager.reset()

export const app = express()

/* const save = await productsManager.productSave({
    title: "queso",
    price:  1100,
    stock: 65,
}) */

app.use("/api", apiRouter)


app.listen(PORT, () => console.log(`conectado a ${PORT}`))