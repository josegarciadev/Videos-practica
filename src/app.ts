// importamos los paquetes necesarios para crear nuestro back
// en este caso sera: express cors morgan los que necesitaremos aqui
import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import videoRoutes from './routes/videoRoutes'
const app= express();

app.set('port',process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/api/video',videoRoutes);

export default app;
