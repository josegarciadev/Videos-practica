import {RequestHandler} from 'express'
import Video from '../models/video'

export const createVideo:RequestHandler= async(req,res)=>{

    const video = new Video(req.body);
    const savevideo = await video.save();
    res.status(200).json({savevideo, true:true})
}
export const getVideos:RequestHandler=async(req,res)=>{

    const video= await Video.find();
    res.status(200).json(video);
    
}

export const getVideo:RequestHandler=async(req,res)=>{
    const {id} =req.params;

    const video = await Video.findById(id);

    try{
        return res.status(201).json(video)
    }catch(error){
        console.error(error);
        return res.json({message:'No encontrado'})
    }
}

export const updateVideo:RequestHandler=async(req,res)=>{
    const {id} =req.params;
    const videoupdate = await Video.findByIdAndUpdate(id,req.body,{new:true});
    try{
        res.status(201).json(videoupdate);
    }catch(error){
        console.error(error);
    }
}

export const deleteVideo:RequestHandler=async(req,res)=>{
    const {id}=req.params;
    const video= await Video.findByIdAndDelete(id,req.body);
    try {
        res.status(200).json({message:'Eliminado'})
    } catch (error) {
        console.error(error);
    }
}