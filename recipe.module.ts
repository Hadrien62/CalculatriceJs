import { Module } from "@nestjs/common";
import { timeController } from "./time.controller";
import {AppService} from './app.service';

@Module({
    controllers : [timeController],
    providers : [AppService],
})
export class RecipeModule {}
