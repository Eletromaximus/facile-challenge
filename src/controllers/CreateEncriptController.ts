import { Request, Response } from 'express'
import crypto from 'crypto'
// @ts-ignore
import { PrismaClient, database } from '@prisma/client'

export class CreateEncriptController {
  async encript (req: Request, res: Response) {
    const prisma = new PrismaClient()
    const { message } = req.body

    if (typeof message === 'string') {
      const buffer = Buffer.from(crypto.randomBytes(16))
      const cipher = crypto.createCipheriv(
        'aes-128-ctr',
        String(process.env.SECRET),
        buffer
      )
      const encrypted = Buffer.concat([
        cipher.update(message),
        cipher.final()
      ])

      const { id } = await prisma.database.create({
        data: {
          hash: encrypted.toString('hex'),
          buffer: buffer.toString('hex')
        }
      })
      return res.status(200).json({
        id: id,
        encrypted_name: 'shazam!'
      })
    }
    // @ts-ignore
    res.json({
      code: 'E_VALIDATION_FAILURE',
      message: 'O campo \'message\' é obrigatório'
    })
  }

  async decrypt (req: Request, res: Response) {
    const { id } = req.body
    const prisma = new PrismaClient()

    const data: database | null = await prisma.database.findUnique({
      where: {
        id
      }
    })

    if (data?.buffer && data?.hash !== null) {
      const decipher = crypto.createDecipheriv(
        'aes-128-ctr',
        String(process.env.SECRET),

        Buffer.from(data.buffer, 'hex')
      )

      const decrpyted = Buffer.concat(
        [decipher.update(
          Buffer.from(data.hash, 'hex')),
        decipher.final()
        ]
      )

      res.status(200).send(
        decrpyted.toString()
      )
    }
    res.status(500)
  }
}
