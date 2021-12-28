import { Play } from "../entities/Play";
import { CreatePlaysService } from "../services/CreatePlaysService";

class PlaysController {
    async handle(name: string, bowl: string, url: string): Promise<Play | any> {
        const createPlaysService = new CreatePlaysService();

        const result = await createPlaysService.create({ name, bowl, url: url })

       return result;
    }
}

export { PlaysController }