// Menu Responsivo
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Carrossel de Imagens
let indice = 0;
const imagens = document.querySelectorAll('.carrossel img');

function mostrarImagem(index) {
    imagens.forEach((img, i) => {
        img.classList.toggle('ativo', i === index);
    });
}

function proximo() {
    indice = (indice + 1) % imagens.length;
    mostrarImagem(indice);
}

function anterior() {
    indice = (indice - 1 + imagens.length) % imagens.length;
    mostrarImagem(indice);
}

// Botão de Voltar ao Topo
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

document.querySelectorAll('.pontilhado').forEach((pontilhado, index) => {
    const pontos = pontilhado.querySelectorAll('.ponto');
    const imagens = pontilhado.previousElementSibling.querySelectorAll('img');

    pontos.forEach((ponto, i) => {
        ponto.addEventListener('click', () => {
            // Remove a classe 'ativo' de todos os pontos e imagens
            pontos.forEach(p => p.classList.remove('ativo'));
            imagens.forEach(img => img.classList.remove('ativo'));

            // Adiciona a classe 'ativo' ao ponto e imagem clicados
            ponto.classList.add('ativo');
            imagens[i].classList.add('ativo');
        });
    });
});
