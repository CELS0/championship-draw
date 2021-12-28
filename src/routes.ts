import { Response, Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer'
import { GetPlaysController } from './controllers/GetPlaysController';
import { ListBowlController } from './controllers/ListBowlController';
import { PlaysController } from './controllers/PlaysController';
import { ResetPlaysController } from './controllers/ResetPlaysController';


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

routes.get('/luck', new GetPlaysController().handle)
routes.post('/reset', new ResetPlaysController().handle)
routes.get('/bowl', new ListBowlController().handle)


