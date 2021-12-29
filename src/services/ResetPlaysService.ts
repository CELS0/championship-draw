import { getCustomRepository } from "typeorm"
import { PlaysRepository } from "../repositories/PlaysRepository"

export interface IResult{
    message: string;
} 
class ResetPlaysService {
    async reset(): Promise<IResult> {
        const repository = getCustomRepository(PlaysRepository);

        const plays = await repository.find()

        plays.map(async play => {
            await repository.update(play.id, { isActive: true });
        })
        const result = {
            message: "Rest Success"
        }
        return result
    }

}
export { ResetPlaysService }