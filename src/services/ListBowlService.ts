import { getCustomRepository } from "typeorm";
import { PlaysRepository } from "../repositories/PlaysRepository";

class ListBowlService {
    async list(bowl: string) {
        const repository = getCustomRepository(PlaysRepository);

        const plays = await repository.find({ bowl })

        return plays
    }
}

export { ListBowlService }