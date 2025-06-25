// Função para trocar a imagem do carro
function trocarCor(cor) {
    const carroAzul = document.getElementById('carroAzul');
    const carroVermelho = document.getElementById('carroVermelho');
    
    // Esconde a imagem que não foi escolhida
    if (cor === 'azul') {
        carroAzul.style.opacity = '1';
        carroVermelho.style.opacity = '0';
    } else if (cor === 'vermelho') {
        carroAzul.style.opacity = '0';
        carroVermelho.style.opacity = '1';
    }
}
