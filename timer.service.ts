import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Timer } from './timer.entity';
import { Repository } from 'typeorm';


@Injectable()
export class TimerService {
    constructor(
        @InjectRepository(Timer)
        private readonly TimerRepository : Repository<Timer>,
    ){}

    async createTime(id:string, timeTakenMs : number, created_at : Date){
        const time = new Timer();
        time.id = id;
        time.timeTakenMS = timeTakenMs;
        time.created_at = created_at;
        await time.save();
        return time;
    }

    async getTime(){
        const res = await this.TimerRepository.find();
        console.log('time is :', res);
        return res;
    }
}
