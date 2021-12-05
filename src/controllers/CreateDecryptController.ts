import { Request, Response } from 'express'
import CreateDecryptService from '../services/CreateDecripytService'

export class CreateDecryptController {
  async decrypt (req: Request, res: Response) {
    const { id } = req.body

    try {
      if (typeof id !== 'number') {
        return res.status(400).json({
          message: 'Digite um id válido'
        })
      }

      const createDecrytService = new CreateDecryptService()

      const decryp = await createDecrytService.execute(id)
      console.log(decryp)
      res.status(200).json(decryp)
    } catch (err) {
      console.log(err)

      return res.json({
        message: 'Erro interno',
        status: 500
      })
    }
  }
}
