import { Router } from 'express'
import { CreateEncriptController } from './controllers/CreateEncriptController'

const router = Router()

const createEncriptController = new CreateEncriptController()

router.post(
  '/encript',
  createEncriptController.encript
)

router.get(
  '/encript/:id',
  createEncriptController.decrypt
)

export { router }
