const play = document.getElementById('btnPlay');
const voltar = document.getElementById('btnVoltar');
const avancar = document.getElementById('btnAvancar');

const faixa = document.getElementById('faixaDeAudio')
const quantidadeFaixas = 10;
let contador = 1;

let isActive = false;


function playPauseIcons(){
    if(isActive === true){
        play.classList.remove('bi-play-circle-fill')
        play.classList.add('bi-pause-circle-fill')
    }
    else{
        play.classList.remove('bi-pause-circle-fill')
        play.classList.add('bi-play-circle-fill')
    }
}

function tocarFaixa(){
    if(isActive == false){
        faixa.play()
        isActive = true;
    }
    else{
        faixa.pause()
        isActive = false;
    }
}

function avancarFaixa(){
    if(contador === 10){
        contador = 1;
        faixa.setAttribute('src', `/AudioBook/assets/Media/${contador}.mp3`);
        tocarFaixa();
    }
    else{
        contador++;
        faixa.setAttribute('src', `/AudioBook/assets/Media/${contador}.mp3`);
        tocarFaixa();
    }
}

function voltarFaixa(){
    if(contador === 1){
        contador = 10;
        faixa.setAttribute('src', `/AudioBook/assets/Media/${contador}.mp3`);
        tocarFaixa();
    }
    else{
        contador--;
        faixa.setAttribute('src', `/AudioBook/assets/Media/${contador}.mp3`);
        tocarFaixa();
    }
}

play.addEventListener('click', function(e){
    tocarFaixa();
    playPauseIcons();
});

avancar.addEventListener('click', function(e){
    isActive = true;
    avancarFaixa();
    tocarFaixa();
    playPauseIcons();
})

voltar.addEventListener('click', function(e){
    isActive = true;
    voltarFaixa();
    tocarFaixa();
    playPauseIcons();
})

