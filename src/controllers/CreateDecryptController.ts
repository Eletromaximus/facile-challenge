import { Request, Response } from 'express'
import CreateDecryptService from '../services/CreateDecripytService'

export class CreateDecryptController {
  async decrypt (req: Request, res: Response) {
    const { id } = req.body

    if (typeof id !== 'number') {
      throw new Error('Valor incorreto, digite um número interio')
    }

    try {
      const createDecrytService = new CreateDecryptService()

      const decryp = await createDecrytService.execute(id)

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
