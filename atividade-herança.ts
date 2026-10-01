class Pessoa {

    constructor(public nome: string) {}

    apresentar(): void {
        console.log(`Meu nome é ${this.nome}`);
    }

}

  class Professor extends Pessoa {

    constructor(nome: string,  public disciplina: string) {
        super(nome);
    }

    override apresentar(): void {
        console.log(`Professor: ${this.nome} | Disciplina: ${this.disciplina}`);
    }
  }
    
    class Aluno extends Pessoa {
 
    constructor (nome: string, public nota: number) {
        super(nome);
    }

    override apresentar(): void {
        console.log(`Aluno: ${this.nome} | Nota: ${this.nota}`);
    }

}

const professor = new Professor("Cesar","Introdução a Programação");
professor.apresentar();
const aluno = new Aluno("Guilherme Kubaski",10);
aluno.apresentar();
