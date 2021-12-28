import { Response } from "express";
import { ResetPlaysService } from "../services/ResetPlaysService";

class ResetPlaysController {
    async handle(res: Response) {
        const resetPlaysService = new ResetPlaysService();

        await resetPlaysService.reset();

        res.status(200).json({message: "Rest Success"})
    }
}

export { ResetPlaysController }