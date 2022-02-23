import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {// value é valor que vai ser transforma em algo  o args são os agumentos que serao mudados
    let values = value.split(' ');// vou transformar o values em value.split ( que é colocar as palavras em espaço) dividir as palavras
    let result = ''; // variavel que vai postar a transformação

    for (let v of values){// aqui mostra todas as palavras da frase 
      result += this.capitalize(v) + ' '; // a variavel result é igual a função capitalize que passa a informação para v
    }// MUITO IMPORTANTE OQUE VAI DIVIDIR AS PALAVRAS É ESSE + ''; QUE SIGNIFICA ESPAÇO , ele consegue interpretar os espaços existente no texto

    return result;
  }

  capitalize(value: string){// essa function esta transforma toda primeira letra da palavra em maiscula
    return value.substr(0,1).toUpperCase() + // (0,1) é o primeira caractere
      value.substr(1).toLowerCase();// aqui pega o resto da palavra e transforma em letra minuscula para garantir
  }

}
