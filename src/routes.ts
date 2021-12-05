import { Router } from 'express'
import { CreateEncryptController } from './controllers/CreateEncryptController'
import { CreateDecryptController } from './controllers/CreateDecryptController'

const router = Router()

const createEncryptController = new CreateEncryptController()
const createDecryptController = new CreateDecryptController()

router.post(
  '/encript',
  createEncryptController.encrypt
)

router.get(
  '/encript/:id',
  createDecryptController.decrypt
)

export { router }
