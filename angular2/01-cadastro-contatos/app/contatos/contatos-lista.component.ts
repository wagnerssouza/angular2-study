import { Component, OnInit } from '@angular/core';
import { Contato } from './contato.model';

import { ContatoService } from './contato.service';


@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html',    
})

export class ContatoListaComponent implements OnInit{

    contatos: Contato[];

    constructor(private contatoService: ContatoService) {}

    ngOnInit():void {  
        this.contatoService.getContatosSlowly()
            .then((contatos: Contato[]) => {
                this.contatos = contatos;
            }).catch(err => {
                console.log(err);
            })
    }

}