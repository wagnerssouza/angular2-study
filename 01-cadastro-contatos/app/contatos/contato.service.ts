import { Injectable } from '@angular/core';
import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';

@Injectable()

export class ContatoService{

    getContatos(): Promise<Contato[]> {
        return Promise.resolve(CONTATOS);
    }

    getContato(id: number): Promise<Contato> {
        return this.getContatos()
            .then((contatos: Contato[]) => {
                return contatos.find((contato) => {
                    return contato.id === id
                })
            });
    } 

    getContatosSlowly(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 200);
        })
        
        .then(() => {
            console.log('Primeiro then');
            return 'Curso Angular 2'
        })

        .then(() => {
            console.log('Aqui chama a lista')
            return this.getContatos();
        })
    }

}
