// Seleciona os elementos
const btnAbrirMenu = document.getElementById('btn-abrir-menu');
const btnFecharMenu = document.getElementById('btn-fechar-menu');
const menuLinks = document.getElementById('menu-links');

// Função para abrir o menu
function abrirMenu() {
  menuLinks.classList.add('menu-aberto');
}

// Função para fechar o menu
function fecharMenu() {
  menuLinks.classList.remove('menu-aberto');
}

// Evento de clique nos botões
btnAbrirMenu.addEventListener('click', abrirMenu);
btnFecharMenu.addEventListener('click', fecharMenu);

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
  const cliqueFora = !menuLinks.contains(event.target) && !btnAbrirMenu.contains(event.target);
  if (cliqueFora) {
    fecharMenu();
  }
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('#menu-links a').forEach(link => {
  link.addEventListener('click', fecharMenu);
});
