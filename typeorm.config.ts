import { TypeOrmModule } from "@nestjs/typeorm";
import { Erreur } from "src/erreur/erreur.entity";
import { Timer } from "src/timer/timer.entity";

export const typeOrmConfig : TypeOrmModule = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username : 'junia_user',
    password : 'junia',
    database : 'junia',
    entities : [Timer,Erreur],
};