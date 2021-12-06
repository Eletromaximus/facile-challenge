"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
// @ts-ignore
const client_1 = require("@prisma/client");
const CustomError_1 = require("../utils/CustomError");
class CreateEncryptService {
    async execute(message) {
        const prisma = new client_1.PrismaClient();
        const buffer = Buffer.from(crypto_1.default.randomBytes(16));
        if (message === '') {
            const error = new CustomError_1.CustomError('code: E_VALIDATION_FAILURE, message: O campo \'message\' é obrigatório', 400);
            return error;
        }
        const cipher = crypto_1.default.createCipheriv('aes-128-ctr', String(process.env.SECRET), buffer);
        const encrypted = Buffer.concat([
            cipher.update(message),
            cipher.final()
        ]);
        try {
            const { id } = await prisma.database.create({
                data: {
                    hash: encrypted.toString('hex'),
                    buffer: buffer.toString('hex')
                }
            });
            return {
                id: id,
                encrypted_name: 'shazam!'
            };
        }
        catch (err) {
            const error = new Error('Serviço indisponível');
            return error;
        }
    }
}
exports.default = CreateEncryptService;
