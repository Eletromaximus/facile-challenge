import { Request, Response } from 'express'
import CreateEncryptService from '../services/CreateEncripytService'

export class CreateEncryptController {
  async encrypt (req: Request, res: Response) {
    const { message } = req.body

    try {
      const createEncryptService = new CreateEncryptService()

      const encript = await createEncryptService.execute(message.toString())

      return res.json(encript)
    } catch (err) {
      console.log(err)

      return res.json({
        message: 'Erro interno, serviço indisponível',
        status: 500
      })
    }
  }
}
