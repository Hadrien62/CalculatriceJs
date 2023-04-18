import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe.module';
import { ErreurModule } from './erreur.module';
import { timeController } from "./time.controller";

@Module({
  imports: [],
  controllers: [timeController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
