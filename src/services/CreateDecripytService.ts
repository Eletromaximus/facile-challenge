import { PrismaClient, database } from '@prisma/client'
import crypto from 'crypto'

export default class CreateDecryptService {
  async execute (id: number) {
    const prisma = new PrismaClient()

    if (id <= 0) {
      return 'ID inválido'
    }

    const data: database | null = await prisma.database.findUnique({
      where: {
        id
      }
    })

    if (data === null) {
      return 'ID inválido'
    }

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

      return (
        decrpyted.toString()
      )
    }
  }
}
