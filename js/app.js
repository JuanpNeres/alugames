let alugados = 1;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${alugados}`);
}


function alterarStatus(id){
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');
   


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        
        if(confirm('Deseja confirmar essa devolução? ')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
        alugados--;
    }
    } else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        alugados++;
        alert(`Foram alugados ${alugados} jogos.`)
    }

    contarEExibirJogosAlugados();

    document.addEventListener('DOMContentLoaded', function() {
    alugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
    });
}