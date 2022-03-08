import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent },// nome : cursos - para onde vai : CursosComponent
    { path: 'curso/:id', component: CursoDetalheComponent }, // passando parametro
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES); // mostra que esse componente é de rotas 
// forRoot que dizer que são as rotas principais