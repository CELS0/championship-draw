import { Response, Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer'
import { PlaysController } from './controllers/PlaysController';


export const routes = Router();

type IResponse = {
    location: string;
}

routes.post('/user', multer(multerConfig).single('file'), async (s3, res: Response) => {
    const { location } = <IResponse><unknown>s3.file;
    console.log(s3.body)

    const { name, bowl } = s3.body;


    const playsController = new PlaysController();


    try{
        const result = await playsController.handle(name, bowl, location);
        res.status(201).json(result);
    }catch(err){
        res.status(400).json(err.message);
    }

});


