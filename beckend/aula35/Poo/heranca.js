class Animal {
    constructor(peso, raca) {
        this.peso = peso;
        this.raca = raca;

    }

    som(){
        console.log("Som de Animal")
    }
}

class Cachorro extends Animal {
    
    som(){
        console.log("Au Au...")
    }
}


class Gato extends Animal {
    
    som(){
        console.log("Miau ... Miau")
    }
}

const animal = new Animal(200, 'indefinido')
const cachorro = new Cachorro(10, 'PitBull')
const gato = new Gato(2, 'Persa')

animal.som()
cachorro.som()
gato.som()