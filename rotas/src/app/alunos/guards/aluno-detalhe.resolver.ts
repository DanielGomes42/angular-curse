import { AlunosService } from './../alunos.service'; // serviço onde está os dados dos alunos
import { Aluno } from './../aluno'; // tipo da constante
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> { // faz carregar o componente antes

    constructor(private alunosService: AlunosService) {}

    resolve(
        route: ActivatedRouteSnapshot, // foto da rota
        state: RouterStateSnapshot // stado da rota
        ): Observable<any>|Promise<any>|any {

            console.log('AlunoDetalheResolver');

            let id = route.params['id'];

            return this.alunosService.getAluno(id);
    }
}
