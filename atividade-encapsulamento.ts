class Conta {

    private saldo: number = 0;

    depositar(valor: number): void {
        if (valor > 0) this.saldo += valor;
    }

    sacar(valor: number): void{
      if (valor > 0) this.saldo -= valor;
    }
    
    consultarSaldo(): number {
        return this.saldo;
    }

}

const conta = new Conta();
conta.depositar(500);
conta.sacar(150);
console.log(conta.consultarSaldo());
