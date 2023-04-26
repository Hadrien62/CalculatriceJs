import { Module } from '@nestjs/common';
import { ErreurController } from './erreur.controller';
import { ErreurService } from './erreur.service';

@Module({
  controllers: [ErreurController],
  providers: [ErreurService]
})
export class ErreurModule {}
