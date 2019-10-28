const botao = document.querySelector(".botao-menu");
const menu = document.querySelector(".menu");
function addClass() {
  menu.classList.toggle("ativo");
  botao.classList.toggle("rotate");
}
botao.addEventListener("click", addClass);
