import { getCustomRepository } from "typeorm"
import { Play } from "../entities/Play";
import { PlaysRepository } from "../repositories/PlaysRepository"
import { ICreatePlay } from "../types/ICreatePlay";




class CreatePlaysService {
    async create({name,bowl,url}: ICreatePlay): Promise<Play>{
        const repository = getCustomRepository(PlaysRepository);

        const UserExists = await repository.findOne({ name });

        if (UserExists) {
            throw new Error(`User ${name} already exists`);
        }

        const limitPlays = await repository.find({bowl})
        console.log(limitPlays)

        if(limitPlays.length == 4) {
            throw new Error(`Limit play in bowl`);
        }

        const user = repository.create({ name, bowl, img: url });

        await repository.save(user)

        return user;
    }
}

export { CreatePlaysService }