const botoes = document.querySelectorAll('.botao-ver-escala');

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const card = botao.closest('.card-selecao');
    const jaAberto = card.classList.contains('aberto');

    document.querySelectorAll('.card-selecao.aberto').forEach((outroCard) => {
      if (outroCard !== card) {
        outroCard.classList.remove('aberto');
      }
    });

    card.classList.toggle('aberto', !jaAberto);
  });
});
