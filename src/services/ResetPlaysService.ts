import { getCustomRepository } from "typeorm"
import { PlaysRepository } from "../repositories/PlaysRepository"

class ResetPlaysService {
    async reset(): Promise<void> {
        const repository = getCustomRepository(PlaysRepository);

        const plays = await repository.find()

        plays.map(async play => {
           await repository.update(play.id, { isActive: true });
        })
    }

}
export { ResetPlaysService }