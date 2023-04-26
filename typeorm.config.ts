import { TypeOrmModule } from "@nestjs/typeorm";
import { Timer } from "src/timer/timer.entity";

export const typeOrmConfig : TypeOrmModule = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username : 'junia_user',
    password : 'junia_user',
    database : 'junia',
    entities : [Timer],
};