const cartas = document.querySelectorAll('.carta');
let cartaVirada = false;
let primeiraCarta, segundaCarta;
let travarTabuleiro = false;

function virarCarta(){
    if(travarTabuleiro){
        return;
    }
    if(this === primeiraCarta){
        return;
    }
    this.classList.add('virar');
    if(!cartaVirada){
        cartaVirada = true;
        primeiraCarta = this;
        return;
    }
    segundaCarta = this;
    cartaVirada = false;
    checarIgual();
}

function checarIgual(){
    if(primeiraCarta.dataset.carta === segundaCarta.dataset.carta){   
        desabilitarCartas();
        return;
    }
    desvirarCarta();
}

function desabilitarCartas(){
    primeiraCarta.removeEventListener('click', virarCarta);
    segundaCarta.removeEventListener('click', virarCarta);
    limparTabuleiro();
}

function desvirarCarta(){
    travarTabuleiro = true;

    setTimeout(() => {
        primeiraCarta.classList.remove('virar');
        segundaCarta.classList.remove('virar');
        
        limparTabuleiro();
    }, 1500);
}

function verificar(){
    if(soma == 6){
        fimJogo();
    }
}

function limparTabuleiro(){
    [cartaVirada, travarTabuleiro] = [false, false];
    [primeiraCarta, segundaCarta] = [null, null];
}

(function embaralhar(){
    cartas.forEach((carta) => {
        let posicaoAleatoria = Math.floor(Math.random() * 12);
        carta.style.order = posicaoAleatoria;
    });
})();

cartas.forEach((carta) =>{
    carta.addEventListener('click', virarCarta)
});