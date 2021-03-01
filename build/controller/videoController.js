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
exports.deleteVideo = exports.updateVideo = exports.getVideo = exports.getVideos = exports.createVideo = void 0;
const video_1 = __importDefault(require("../models/video"));
const createVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const video = new video_1.default(req.body);
    const savevideo = yield video.save();
    res.status(200).json({ savevideo, true: true });
});
exports.createVideo = createVideo;
const getVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const video = yield video_1.default.find();
    res.status(200).json(video);
});
exports.getVideos = getVideos;
const getVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const video = yield video_1.default.findById(id);
    try {
        return res.status(201).json(video);
    }
    catch (error) {
        console.error(error);
        return res.json({ message: 'No encontrado' });
    }
});
exports.getVideo = getVideo;
const updateVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const videoupdate = yield video_1.default.findByIdAndUpdate(id, req.body, { new: true });
    try {
        res.status(201).json(videoupdate);
    }
    catch (error) {
        console.error(error);
    }
});
exports.updateVideo = updateVideo;
const deleteVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const video = yield video_1.default.findByIdAndDelete(id, req.body);
    try {
        res.status(200).json({ message: 'Eliminado' });
    }
    catch (error) {
        console.error(error);
    }
});
exports.deleteVideo = deleteVideo;
