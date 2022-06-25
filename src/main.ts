import GeradorDeCPF from "./modules/gera-cpf";
import "./assets/css/styles.css";

const cpfGerado = document.querySelector<HTMLDivElement>("#cpf-gerado");
const botao = document.querySelector<HTMLButtonElement>("#button");

const mostrar = (): void => {
  if (!cpfGerado) return;
  const cpf = new GeradorDeCPF().gerarCPF();
  cpfGerado.innerHTML = cpf;
};

const init = (): void => {
  if (!botao) return;
  botao.addEventListener("click", mostrar);
}

init();

