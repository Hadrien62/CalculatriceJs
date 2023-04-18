import { Get, Controller } from "@nestjs/common";

@Controller()
export class timeController{
    @Get()
    getTime(){
        console.log('le temps est passé bonne chance');
        return 'tu es pas très bon et nul';
    }
}


