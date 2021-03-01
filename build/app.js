"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importamos los paquetes necesarios para crear nuestro back
// en este caso sera: express cors morgan los que necesitaremos aqui
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const videoRoutes_1 = __importDefault(require("./routes/videoRoutes"));
const app = express_1.default();
app.set('port', 4000);
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api/video', videoRoutes_1.default);
exports.default = app;
