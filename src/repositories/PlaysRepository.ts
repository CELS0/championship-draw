import { EntityRepository, Repository } from "typeorm";
import { Play } from "../entities/Play";

@EntityRepository(Play)
class PlaysRepository extends Repository<Play> {}

export { PlaysRepository };