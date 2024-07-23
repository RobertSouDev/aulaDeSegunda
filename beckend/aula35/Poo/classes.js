class Pessoa {
    // ATRIBUTOS DE CLASSE
    nome;
    cpf;
    data_nascimento;


    constructor(nome, cpf, data_nascimento , dependente){
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento
        this.dependente = dependente

    }
// Metodo/funcao /eventos de classes
    correr() {
        console.log(`A ${this.nome} esta correndo...`)
    } 
    
}

const pessoa1 = new Pessoa("Marcio", "22222222222" , "2000-12-12")
const pessoa2 = new Pessoa("Robert", "11211111111" , "2003-10-11")

const dependente = new Pessoa("Monico", "98765432112", "1998-12-12");
const responsavel = new Pessoa("Jose", "98765432112", '1998-10-11', dependente)

dependente.nome = "maria"

responsavel.dependente.nome = "Rachael"

dependente.correr()
responsavel.correr()

console.log(responsavel)
