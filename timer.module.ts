import { Module } from '@nestjs/common';
import { TimerController } from './timer.controller';
import { TimerService } from './timer.service';
import { AppService } from 'src/app.service';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/config/typeorm.config';
import { Timer } from './timer.entity';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),TypeOrmModule.forFeature([Timer])],
  controllers: [TimerController],
  providers: [TimerService],
  exports:[TimerService],
})
export class TimerModule {}
