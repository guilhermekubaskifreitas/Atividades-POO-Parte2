class Animal {
    emitirSom(): void {
        console.log("Som");
    }
}

class cachorro extends Animal {
    override emitirSom(): void {
        console.log("Au Au Au");
    }
}

class gato extends Animal {
    override emitirSom(): void {
        console.log("Miau Miau");
    }
}

const animais: Animal[] = [new cachorro(), new gato()];
for (const animal of animais) {
    animal.emitirSom();
}
