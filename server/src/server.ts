import express, { json } from 'express'
import productsRouter from './routes/productRoutes'
import cartRoutes from './routes/cartRoutes'

const app = express()

//middlewares
app.use(json())//add a body to the request(previously body parser)

app.use('/products', productsRouter)

app.use('/cart', cartRoutes)

app.listen(4000, ()=> {
    console.log(`server running `)
})