import { IFormCanDeactivate } from './iform-candeactivate';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> { // coloca a interface aqui (iformcandeactivate)
   // estou pegando tudo que tem aqui dentro e colocando em iformcandeactivate
        canDeactivate(
            component: IFormCanDeactivate, // ele manda para a interface esse metodo
            route: ActivatedRouteSnapshot,// foto da rota
            state: RouterStateSnapshot // estado da rota
        ): Observable<boolean>|Promise<boolean>|boolean { // observabol que pode ser boleano promisse etec...

            console.log('guarda de desativação');// todas as rotas que tivem a marcação desse serviço em alunos.rounting vai mostra guarda de desativação

            //return component.podeMudarRota ? component.podeMudarRota() : true;  // esse é metoda para mostra a msg ou não quando mundo de rota

            return component.podeDesativar ? component.podeDesativar() : true; // metodo que está na interface iform-candeactivate.ts
    }
}
