export default class GeradorDeCPF {
  private gerarPrimeirosDigitos(): string {
    const menor = 100000000;
    const maior = 999999999;
    return String(Math.floor(Math.random() * (maior - menor) + menor));
  }

  private calculoDeResto(numero: number): number {
    return 11 - (numero % 11);
  }

  private geraDigito(novePrimeiros: string): string {
    const arrayDeDigitos = Array.from(novePrimeiros);

    let redutor = arrayDeDigitos.length + 1;
    const somaDosDigitos = arrayDeDigitos.reduce((acumulador, valor) => {
      acumulador += redutor * Number(valor);
      redutor--;
      return acumulador;
    }, 0);

    const digito = this.calculoDeResto(somaDosDigitos);
    return digito > 9 ? "0" : String(digito);
  }

  private formatarCPF(cpf: string): string {
    return (
      cpf.slice(0, 3) +
      "." +
      cpf.slice(3, 6) +
      "." +
      cpf.slice(6, 9) +
      "-" +
      cpf.slice(9, 11)
    );
  }

  public gerarCPF(): string {
    const primeirosDigitos = this.gerarPrimeirosDigitos();
    const digito10 = this.geraDigito(primeirosDigitos);
    const digito11 = this.geraDigito(primeirosDigitos + digito10);
    return this.formatarCPF(primeirosDigitos + digito10 + digito11);
  }
}
