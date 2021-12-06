"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const crypto_1 = __importDefault(require("crypto"));
class CreateDecryptService {
    async execute(id) {
        const prisma = new client_1.PrismaClient();
        if (id <= 0) {
            return 'ID inválido';
        }
        const data = await prisma.database.findUnique({
            where: {
                id
            }
        });
        if (data === null) {
            return 'ID inválido';
        }
        if ((data === null || data === void 0 ? void 0 : data.buffer) && (data === null || data === void 0 ? void 0 : data.hash) !== null) {
            const decipher = crypto_1.default.createDecipheriv('aes-128-ctr', String(process.env.SECRET), Buffer.from(data.buffer, 'hex'));
            const decrpyted = Buffer.concat([decipher.update(Buffer.from(data.hash, 'hex')),
                decipher.final()
            ]);
            return (decrpyted.toString());
        }
    }
}
exports.default = CreateDecryptService;
