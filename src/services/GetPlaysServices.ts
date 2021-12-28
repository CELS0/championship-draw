import { getCustomRepository } from "typeorm";
import { PlaysRepository } from "../repositories/PlaysRepository";

interface IResponse {
    name: string;
    img: string;
}

class GetPlaysServices {
    async luck(bowl: string): Promise<IResponse | Object> {
        const repository = getCustomRepository(PlaysRepository);

        const plays = await repository.find({ where: { bowl, isActive: true } })

        if(plays.length === 0 ){
            return {Message: "Todos jogadores nesse pote já foram sorteados"}
        }

        const random = Math.floor(Math.random() * plays.length);

        await repository.update(plays[random].id,{isActive:false})

        const { name, img } = plays[random];

        const response: IResponse = {
            name,
            img,
        }

        return response
    }

}

export { GetPlaysServices }