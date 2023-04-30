import { Controller, Get, Post, Body } from '@nestjs/common';
import { ErreurService } from './erreur.service';
import { Erreur } from './erreur.entity';

@Controller('erreur')
export class ErreurController {
    constructor(private readonly erreurService:ErreurService){}
    
    @Get()
    getErreur(){
        console.log('get erreur');
        return this.erreurService.getErreur();
    }

    @Post()
    createErreur(
        @Body('id') id: string,
        @Body('created_at') created_at : Date, 
        ): Promise<Erreur>{
        return this.erreurService.createErreur(id, created_at);
    }
}
