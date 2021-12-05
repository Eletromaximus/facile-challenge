import express from 'express'
import 'express-async-errors'
import { router } from './routes'
import cors from 'cors'
import handleError from './utils/HandleError'

const app = express()

app.use(express.json())

app.use(cors())

app.use(router)

app.use(handleError)

app.listen(process.env.PORT, () => console.log('welcome to the server'))
