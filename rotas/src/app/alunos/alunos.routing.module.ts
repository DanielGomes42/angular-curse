import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunosGuard } from './../guards/alunos.guard';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes = [ // variavel das rotas 
    {path: '', component: AlunosComponent, 
     canActivateChild: [AlunosGuard],
     children : [
        {path: 'novo', component: AlunoFormComponent}, // path e depois o nome da rota em si que tu vai usa no html depous com routerLink
        {path: ':id', component: AlunoDetalheComponent,
            resolve: { aluno : AlunoDetalheResolver }
        },
        {path: ':id/editar', component: AlunoFormComponent,
            canDeactivate: [AlunosDeactivateGuard]
        }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)], // modulo de funcionalidade 
    exports: [RouterModule] // acesso as diretivas 
})
export class AlunosRoutingModule {} 