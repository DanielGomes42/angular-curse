import { IFormCanDeactivate } from './../../guards/iform-candeactivate';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any = {};
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);

        if (this.aluno === null){
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
    console.log('mudou');
  }

  podeMudarRota(){ // metodo que está indo para o serviço alunos deactivate.guard  (só é ativado quando mudar algo no formulario)

    if (this.formMudou) {  //se formMudou acontecer -> mostre tem certeza que desaj sair dessa pagina
      confirm('Tem certeza que deseja sair dessa página?'); // aqui que decide o confirma ja manda um cancel ou ok
      // se clicar em ok o metodo continua e manda treu la para o serviço que navega para a
    }

    return true; // se todo o metodo de cima  acontecer que dizer que ele é true

  }

  podeDesativar(){
    return this.podeMudarRota(); //aqui fala que podemudar rota é podeDesativar rota
    //lembrando podeDesativar rota é de fato o serviço guard (alunos-deactivate.guard.ts)
  }

}

// então tu criar um serviço alunos-deactivate , ai nessa pagina aqui tu escuta o formularia , se ele mudar tu manda
// para o serviço que mudou e la no serviço ele vai mostra a msg se quer mudar ou não
