const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
});

navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

function inicializarCarrossel(carrossel) {
    const imagens = carrossel.querySelectorAll('.carrossel-item');
    const pontos = carrossel.querySelectorAll('.ponto');
    let indice = 0;

    function mostrarImagem(index) {
        imagens.forEach((img, i) => {
            img.classList.toggle('ativo', i === index);
        });
        pontos.forEach((ponto, i) => {
            ponto.classList.toggle('ativo', i === index);
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

    pontos.forEach((ponto, i) => {
        ponto.addEventListener('click', () => {
            indice = i;
            mostrarImagem(indice);
        });
    });

    // Adicionar efeito de hover nas imagens
    imagens.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease';
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
}

document.querySelectorAll('.carrossel').forEach((carrossel) => {
    inicializarCarrossel(carrossel);
});

// Adicionar acessibilidade ao menu toggle
menuToggle.setAttribute('aria-expanded', 'false');
menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
});