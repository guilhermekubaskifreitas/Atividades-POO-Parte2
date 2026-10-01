class Animal {
    emitirSom(): void {
        console.log("Som");
    }
}

class Cachorro extends Animal {
    override emitirSom(): void {
        console.log("Au Au Au");
    }
}

class Gato extends Animal {
    override emitirSom(): void {
        console.log("Miau Miau");
    }
}

const animais: Animal[] = [new Cachorro(), new Gato()];
for (const animal of animais) {
    animal.emitirSom();
}
