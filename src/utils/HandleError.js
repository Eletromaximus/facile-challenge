"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = require("./CustomError");
function handleError(error, req, res, next) {
    let customError = error;
    if (!(error instanceof CustomError_1.CustomError)) {
        customError = new CustomError_1.CustomError('Serviço indisponível, tente mais tarde');
    }
    res.status(customError.status).json(customError.message);
}
exports.default = handleError;
