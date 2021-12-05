import crypto from 'crypto'
// @ts-ignore
import { PrismaClient } from '@prisma/client'
import { CustomError } from '../utils/CustomError'
export default class CreateEncryptService {
  async execute (message: string) {
    const prisma = new PrismaClient()
    const buffer = Buffer.from(crypto.randomBytes(16))

    if (message === '') {
      const error = new CustomError(
        'code: E_VALIDATION_FAILURE, message: O campo \'message\' é obrigatório',
        400
      )

      return error
    }

    const cipher = crypto.createCipheriv(
      'aes-128-ctr',
      String(process.env.SECRET),
      buffer
    )

    const encrypted = Buffer.concat([
      cipher.update(message),
      cipher.final()
    ])

    try {
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
    } catch (err) {
      console.log(err)

      const error = new Error('Serviço indisponível')
      return error
    }
  }
}
