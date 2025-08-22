function alterarStatus(id){
    let jogo = document.getElementById('game-' + id);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('dashboard__item__button');
    let nome = jogo.querySelector('.dashboard__item__name');

    alert(nome.innerHTML);

    if (jogo.classlist.contains('dashboard__item__button--return')) {
        jogo.classList.remove('dashboard__item__button--return');
        jogo.classList.add('dashboard__item__button');
    } else{
        jogo.classList.remove('dashboard__item__button');
        jogo.classList.add('dashboard__item__button--return');
    }
}