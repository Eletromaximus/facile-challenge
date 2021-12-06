"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDecryptController = void 0;
const CreateDecripytService_1 = __importDefault(require("../services/CreateDecripytService"));
class CreateDecryptController {
    async decrypt(req, res) {
        const data = req.body;
        if (data.id) {
            const { id } = data;
            try {
                if (typeof id !== 'number') {
                    return res.status(400).json({
                        message: 'Digite um id válido'
                    });
                }
                const createDecrytService = new CreateDecripytService_1.default();
                const decryp = await createDecrytService.execute(id);
                res.status(200).json(decryp);
            }
            catch (err) {
                return res.json({
                    message: 'Erro interno',
                    status: 500
                });
            }
        }
        else {
            res.status(400).json('requisição inválida');
        }
    }
}
exports.CreateDecryptController = CreateDecryptController;
