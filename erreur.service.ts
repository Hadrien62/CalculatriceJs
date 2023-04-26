import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Erreur } from './erreur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ErreurService {
    constructor(
        @InjectRepository(Erreur)
        private erreurRepository : Repository<Erreur>,
    ){}

    async createErreur(id:string, created_at : Date){
        const erreur = new Erreur();
        erreur.id = id;
        erreur.created_at = created_at;
        await erreur.save();
        return erreur;
    }

    async getErreur(){
        const res = await this.erreurRepository.find();
        console.log('erreur is :', res);
        return res;
    }
}