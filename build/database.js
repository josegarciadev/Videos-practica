"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//crearemos una funcion que se ejecute automaticamente al llamar a nuestra db y que sea async
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mongooseOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        };
        const db = yield mongoose_1.default.connect('mongodb+srv://josedevmaster:258897987@cluster0.fxght.mongodb.net/Videosdb?retryWrites=true&w=majority', mongooseOptions);
        //const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,mongooseOptions);
        console.log('\x1b[31m%s\x1b[0m', 'Database ON: ', db.connection.name);
    }
    catch (error) {
        console.error(error);
    }
}))();