abstract class Forma {
    abstract calcularArea(): number;
}

class Retangulo extends Forma {

    constructor(private largura: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }
}
   class Circulo extends Forma{
     constructor(private raio: number){
     super()
     }
     
    calcularArea(): number{
       return (this.raio ** 2) * 3.14;
     }
   }


const retangulo = new Retangulo(4, 5);
console.log(retangulo.calcularArea());
const circulo = new Circulo(2);
console.log(circulo.calcularArea());
