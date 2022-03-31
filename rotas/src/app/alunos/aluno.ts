
export class Aluno { // estou criando um novo tipo de constante  chamado aluno que contém os tipos number e string
// que está sendo utilizado em alunos detales
    constructor(
        public id: number,
        public nome: string,
        public email: string
    ){}
}