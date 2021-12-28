import { Request, Response } from "express";
import { GetPlaysServices } from "../services/GetPlaysServices";

class GetPlaysController {
    async handle(req: Request, res: Response) {
        const { bowl } = req.query;
        const getPlaysServices = new GetPlaysServices();

        const result = await getPlaysServices.luck(String(bowl))

        res.status(200).json(result)
    }
}

export { GetPlaysController }