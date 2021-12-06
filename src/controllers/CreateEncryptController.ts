import { Request, Response } from 'express'
import CreateEncryptService from '../services/CreateEncripytService'
import { CustomError } from '../utils/CustomError'

export class CreateEncryptController {
  async encrypt (req: Request, res: Response) {
    const data = req.body

    const { message } = data
    try {
      const createEncryptService = new CreateEncryptService()

      const encript = await createEncryptService.execute(message.toString())

      return res.json(encript)
    } catch (error: any) {
      if (error instanceof CustomError) {
        res.status(error.status).json(error.message)
      } else {
        res.status(error.status).json('Erro interno')
      }
    }
  }
}
