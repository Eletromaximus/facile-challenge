import crypto from 'crypto'
// @ts-ignore
import { PrismaClient } from '@prisma/client'

// interface IEncript {
//   message: string
// }

export default class CreateEncryptService {
  async execute (message: string) {
    if (message === '') {
      throw new Error('O campo \'message\' é obrigatório')
    }

    const prisma = new PrismaClient()
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

    return {
      id: id,
      encrypted_name: 'shazam!'
    }
  }
}
