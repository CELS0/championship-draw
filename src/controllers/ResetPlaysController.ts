import { ResetPlaysService } from "../services/ResetPlaysService";
import { Request, Response } from "express";

class ResetPlaysController {
    async handle(req: Request, res: Response) {
        const resetPlaysService = new ResetPlaysService();
        req
        const result = await resetPlaysService.reset();

        res.status(200).json(result)
    }
}

export { ResetPlaysController }