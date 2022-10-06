import express from 'express'
const app = express()
import dotenv from 'dotenv';
dotenv.config()
import router from '../routes/studentRoutes'
import swaggerUiExpress from 'swagger-ui-express'
const swaggerDocument = require('../swagger/swagger.json')

app.use(express.json())

console.info('For API Documentation visit http://localhost:3000/api-docs')
app.use(
    '/api-docs',
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(swaggerDocument)
);
app.listen(process.env.PORT, () => {
    console.log(`Backend running at port ${process.env.PORT}`)
})
 
app.use('/students', router) 