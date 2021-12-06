import { Request, Response } from 'express'
import CreateDecryptService from '../services/CreateDecripytService'

export class CreateDecryptController {
  async decrypt (req: Request, res: Response) {
    const data = req.body

    if (data.id) {
      const { id } = data
      try {
        if (typeof id !== 'number') {
          return res.status(400).json({
            message: 'Digite um id válido'
          })
        }

        const createDecrytService = new CreateDecryptService()

        const decryp = await createDecrytService.execute(id)

        res.status(200).json(decryp)
      } catch (err) {
        return res.status(500).json({
          message: 'Erro interno'
        })
      }
    } else {
      res.status(400).json('requisição inválida')
    }
  }
}
