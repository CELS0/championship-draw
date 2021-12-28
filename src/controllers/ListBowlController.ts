import { Request, Response } from "express";
import { ListBowlService } from '../services/ListBowlService'

class ListBowlController {
    async handle(req: Request, res: Response){

        const { bowl } = req.query;

        const listBowlService = new ListBowlService();

        const result = await listBowlService.list(String(bowl))

        res.status(200).json(result);
    }
}

export { ListBowlController }