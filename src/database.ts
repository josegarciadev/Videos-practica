import mongoose,{ConnectOptions} from 'mongoose'
import config from './config'

//crearemos una funcion que se ejecute automaticamente al llamar a nuestra db y que sea async

(async ()=>{
    try{
        const mongooseOptions:ConnectOptions={
            useUnifiedTopology:true,
            useNewUrlParser:true
        }
        const db = await mongoose.connect('mongodb+srv://josedevmaster:258897987@cluster0.fxght.mongodb.net/Videosdb?retryWrites=true&w=majority',mongooseOptions)
        //const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,mongooseOptions);
        console.log('\x1b[31m%s\x1b[0m','Database ON: ', db.connection.name);
    }catch(error){
        console.error(error);
    }
})()