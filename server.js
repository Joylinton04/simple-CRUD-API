import express from 'express'
import prodRoute from './route/product.js'
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use('/products', prodRoute)

app.get('/', (req, res) => {
    res.send('API is working')
})

app.listen(port,() => {
    console.log(`Server is running on port: ${port}`)
})