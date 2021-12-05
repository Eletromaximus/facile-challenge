import express from 'express'
import 'express-async-errors'
import { router } from './routes'
import handleError from './utils/HandleError'

const app = express()

app.use(express.json())

app.use(router)

app.use(handleError)

app.listen(3000, () => console.log('welcome to the server'))
