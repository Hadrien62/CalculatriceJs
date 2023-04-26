import { Controller, Get, Post, Body } from '@nestjs/common';
import { TimerService } from './timer.service';
import { Timer } from './timer.entity';

@Controller('timer')
export class TimerController {
    constructor(private readonly timerService:TimerService){}
    
    @Get()
    getTime(){
        console.log('get time');
        return this.timerService.getTime();
    }

    @Post()
    createTime(
        @Body('id') id: string,
        @Body('timeTakenMs') timeTakenMS : number,
        @Body('created_at') created_at : Date, 
        ): Promise<Timer>{
        return this.timerService.createTime(id, timeTakenMS, created_at);
    }
}
