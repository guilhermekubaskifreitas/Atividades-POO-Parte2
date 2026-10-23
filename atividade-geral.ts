interface Apresentação {
    apresentar(): void;
}

abstract class Pessoa implements Apresentação {
  
    constructor(protected nome: string) {}

    getNome(): string {
        return this.nome;
    }

    abstract apresentar(): void;
}

class Professor extends Pessoa {

    constructor(nome: string, private disciplina: string) {
        super(nome);
    }

    getDisciplina(): string {
        return this.disciplina;
    }

    override apresentar(): void {
        console.log(`Professor: ${this.nome} | Disciplina: ${this.disciplina}`);
    }
}

class Aluno extends Pessoa {

    private nota: number;

    constructor(nome: string, nota: number) {
        super(nome);
        this.nota = 0;
        this.setNota(nota);
    }

    getNota(): number {
        return this.nota;
    }

    setNota(nota: number): void {
        if (nota < 0 || nota > 10) {
            throw new Error("Nota deve estar entre 0 e 10.");
        }
        this.nota = nota;
    }

    override apresentar(): void {
        console.log(`Aluno: ${this.nome} | Nota: ${this.nota}`);
    }
}

const professor = new Professor("Cesar", "Introdução a Programação");
professor.apresentar();

const aluno = new Aluno("Guilherme Kubaski", 10);
aluno.apresentar();
