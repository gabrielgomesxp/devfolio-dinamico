// PASSO 1: Selecionar os elementos que vamos usar
// Seleciona o botão pelo seu ID
const themeToggleButton = document.getElementById('theme-toggle'); 

// Seleciona o corpo (body) da página
const body = document.querySelector('body'); 

// PASSO 2: Adicionar um "ouvinte de evento"
// Dizemos ao botão: "Ei, quando alguém clicar em você, execute a função chamada 'toggleTheme'"
themeToggleButton.addEventListener('click', toggleTheme);

// PASSO 3: Escrever a função que faz a mágica
function toggleTheme() {
    // A função toggle é incrível: 
    // Se a classe 'dark-mode' EXISTE no body, ela REMOVE.
    // Se a classe 'dark-mode' NÃO EXISTE no body, ela ADICIONA.
    body.classList.toggle('dark-mode');
}