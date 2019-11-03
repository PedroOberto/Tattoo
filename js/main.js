const botao = document.querySelector(".botao-menu");
const menu = document.querySelector(".menu");
function addClass() {
  menu.classList.toggle("ativo");
  botao.classList.toggle("rotate");
}
botao.addEventListener("click", addClass);

function initScroollSuave() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop - 20;
    window.scrollTo({
      top: topo,
      behavior: "smooth"
    });
    menu.classList.toggle("ativo");
    botao.classList.toggle("rotate");
  }
  linksInternos.forEach(link => {
    link.addEventListener("click", scrollToSection);
  });
}
initScroollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".animation-scroll");
  const windowsMetade = window.innerHeight * 0.5;
  function animaScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top - windowsMetade;
      if (sectionTop < 0) {
        section.classList.add("ativo");
      }
      window.addEventListener("scroll", animaScroll);
    });
  }
  animaScroll();
}
initAnimacaoScroll();
