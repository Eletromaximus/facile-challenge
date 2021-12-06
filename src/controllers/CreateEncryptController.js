"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEncryptController = void 0;
const CreateEncripytService_1 = __importDefault(require("../services/CreateEncripytService"));
const CustomError_1 = require("../utils/CustomError");
class CreateEncryptController {
    async encrypt(req, res) {
        const data = req.body;
        if (data.message) {
            const { message } = data;
            try {
                const createEncryptService = new CreateEncripytService_1.default();
                const encript = await createEncryptService.execute(message.toString());
                res.json(encript);
            }
            catch (error) {
                if (error instanceof CustomError_1.CustomError) {
                    res.status(error.status).json(error.message);
                }
                else {
                    res.status(error.status).json('Erro interno');
                }
            }
        }
        else {
            res.status(400);
        }
    }
}
exports.CreateEncryptController = CreateEncryptController;
